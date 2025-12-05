import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>Last Updated: October 2023</p>
          
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
            <p>At Avishkar Diagnostic, we collect personal information such as your name, contact details, date of birth, and medical history when you book an appointment or visit our centers. We also collect technical data when you use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Process your test requests and generate reports.</li>
              <li>Communicate with you regarding appointments and results.</li>
              <li>Improve our services and website functionality.</li>
              <li>Comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. Data Security</h2>
            <p>We employ industry-standard security measures, including encryption and strict access controls, to protect your sensitive health information. Your data is stored securely and is only accessible to authorized personnel.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share your data with trusted third-party service providers (e.g., specialized reference labs) only as necessary to provide our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal data. Please contact our Data Privacy Officer at privacy@avishkardiagnostic.com for any concerns.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
