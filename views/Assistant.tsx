import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      id: 'welcome', 
      role: 'model', 
      text: "Hello! I'm NeuroBot. I can help you understand our test procedures, preparation instructions, or basic health terms. How can I assist you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat session once
  useEffect(() => {
    try {
      chatSessionRef.current = createChatSession();
    } catch (error) {
      console.error("Failed to init chat", error);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a placeholder message for the model response
      const modelMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: '', isStreaming: true }]);

      const result = await sendMessageStream(chatSessionRef.current, userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
            fullText += text;
            setMessages(prev => 
                prev.map(msg => 
                    msg.id === modelMsgId 
                    ? { ...msg, text: fullText } 
                    : msg
                )
            );
        }
      }

      setMessages(prev => 
        prev.map(msg => 
            msg.id === modelMsgId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );

    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I apologize, but I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-background min-h-screen py-8 flex flex-col">
      <div className="container mx-auto max-w-4xl px-4 flex-grow flex flex-col h-[80vh]">
        <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-3">
                <Bot className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-2xl font-bold text-primary">NeuroBot Health Assistant</h1>
            <p className="text-sm text-gray-500">Ask about test preparations, prices, or general info.</p>
        </div>

        {/* Chat Container */}
        <div className="flex-grow bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden">
            
            {/* Disclaimer Bar */}
            <div className="bg-blue-50 px-4 py-2 flex items-center gap-2 text-xs text-blue-800 border-b border-blue-100">
                <AlertCircle className="h-3 w-3" />
                <span>AI responses are for informational purposes only and do not replace professional medical advice.</span>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'model' && (
                            <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center mt-1">
                                <Sparkles className="h-4 w-4 text-white" />
                            </div>
                        )}
                        
                        <div 
                            className={`max-w-[80%] px-5 py-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-primary text-white rounded-br-none' 
                                : 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100'
                            }`}
                        >
                            <div className="whitespace-pre-wrap">{msg.text}</div>
                            {msg.isStreaming && (
                                <span className="inline-block w-1.5 h-4 ml-1 bg-secondary animate-pulse align-middle"></span>
                            )}
                        </div>

                        {msg.role === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                                <User className="h-4 w-4 text-gray-500" />
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2 relative">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your question here (e.g., 'What is a Lipid Profile?')..."
                        className="flex-grow pl-4 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
                        disabled={isLoading}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-800 disabled:bg-gray-300 text-white p-2.5 rounded-lg transition-colors shadow-sm"
                    >
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;