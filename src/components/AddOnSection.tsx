
import React from 'react';

const AddOnSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Enhance Your Lending Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Customize your lending process with these powerful add-ons
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "👥",
              title: "Add Witness(es)",
              description: "Strengthen agreements with additional signatories for transparency."
            },
            {
              icon: "📜",
              title: "Legal Stamp Duty",
              description: "Ensure your loan documents are recognized legally with easy stamp duty options."
            },
            {
              icon: "✅",
              title: "Notary Verification",
              description: "Get your documents verified for higher legal protection."
            },
            {
              icon: "🔒",
              title: "Collateral Attachment",
              description: "Secure your loan with collateral options to minimize risk."
            },
            {
              icon: "🎁",
              title: "Gift / Token of Gratitude",
              description: "Borrowers can show appreciation with a token of gratitude: an optional, kind gesture."
            },
            {
              icon: "🤝",
              title: "Waiver (Forgiveness) Option",
              description: "Offer forgiveness on certain payments if you wish to show kindness."
            },
            {
              icon: "🛡️",
              title: "Takaful (Loan Protection)",
              description: "Protect your loan from unforeseen circumstances with Islamic-compliant insurance."
            },
            {
              icon: "🔔",
              title: "Notification Frequency Settings",
              description: "Control how often and through which channels you want reminders sent."
            },
            {
              icon: "📊",
              title: "Flexible Repayment Plans",
              description: "Customize repayment terms that work best for both you and the borrower."
            },
          ].map((addon, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 feature-card">
              <div className="text-3xl mb-4">{addon.icon}</div>
              <h3 className="font-display font-medium text-lg mb-2 text-gray-900">
                {addon.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnSection;
