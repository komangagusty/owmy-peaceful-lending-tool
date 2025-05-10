
import React from 'react';
import WaitlistForm from './WaitlistForm';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              Lending to Friends and Family Shouldn't Hurt Your Heart
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              OWWY makes lending simple, stress-free, and emotionally peaceful. 
              So you can help without the awkward follow-up.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <WaitlistForm />
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in">
            <Card className="rounded-3xl shadow-xl overflow-hidden bg-white p-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ahmed Khan</h3>
                  <p className="text-gray-500">Car repair loan</p>
                </div>
                <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Active
                </span>
              </div>
              
              <div className="mt-8">
                <div className="text-5xl font-bold mb-1">$1,000</div>
                <div className="text-gray-500">Started 4/1/2024</div>
              </div>
              
              <div className="mt-8 bg-indigo-50 rounded-xl p-4 flex items-start gap-3">
                <Bell className="text-blue-400 mt-1" />
                <div>
                  <div className="text-gray-700 font-medium">Next Payment Due</div>
                  <div className="text-gray-800 text-lg">5/1/2024</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="rounded-xl py-6 border-gray-300"
                >
                  Send Reminder
                </Button>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 rounded-xl py-6 text-white flex items-center justify-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Mark as Paid
                </Button>
              </div>
            </Card>
            
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-owwy-light rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-owwy-accent/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
