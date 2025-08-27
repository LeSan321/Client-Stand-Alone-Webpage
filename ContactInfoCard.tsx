import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

// @component: ContactInfoCard
export const ContactInfoCard = () => {
  // @return
  return <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 min-w-[300px]">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        <span>CONTACT INFORMATION</span>
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
            <Mail className="w-4 h-4 text-pink-600" />
          </div>
          <span className="text-gray-700">lesanr@protonmail.com</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
            <Phone className="w-4 h-4 text-pink-600" />
          </div>
          <span className="text-gray-700">360-348-7181</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
            <Globe className="w-4 h-4 text-pink-600" />
          </div>
          <span className="text-gray-700">www.comingsoon.indevelopment</span>
        </div>
      </div>
    </div>;
};