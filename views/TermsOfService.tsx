import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-primary mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the Avishkar Diagnostic website, you agree to comply with and be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. Medical Disclaimer</h2>
            <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. Booking and Payments</h2>
            <p>Appointment bookings are subject to availability. Prices for tests are subject to change without notice. Payment is due at the time of service unless otherwise agreed.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. Report Delivery</h2>
            <p>We strive to deliver reports within the estimated turnaround time (TAT). However, delays may occur due to technical reasons or further testing requirements. We are not liable for consequential damages resulting from delays.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. User Conduct</h2>
            <p>You agree not to use the website for any unlawful purpose or to interfere with its proper operation.</p>
          </section>

           <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">6. Contact</h2>
            <p>If you have any questions about these terms, please contact us at info@avishkardiagnostic.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
