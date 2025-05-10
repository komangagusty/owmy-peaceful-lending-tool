
import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            OWWY Has Your Back (and Your Heart)
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A friendly tool to manage personal loans that keeps things kind, clear, and calm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">Easy Loan Agreements</h3>
                <p className="text-gray-600">
                  Create simple, secure loan terms in minutes. All your lending should be documented from now!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">WhatsApp-First</h3>
                <p className="text-gray-600">
                  Manage everything from your favorite chat app. Request, remind, and track. You can manage all without switching apps.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">Gentle, Custom Reminders</h3>
                <p className="text-gray-600">
                  Choose the tone that fits: kind, firm, or neutral. We'll nudge your borrower, without hurting your bond. Promise!
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">Legally Valid Documents</h3>
                <p className="text-gray-600">
                  Your generosity is protected with documentation that holds up if things go wrong.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 feature-card md:col-span-2">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  ✅
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-display font-semibold text-xl mb-2">Emotionally Safe Lending</h3>
                <p className="text-gray-600">
                  No more begging. No more guilt. Just peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
