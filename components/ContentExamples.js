import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContentExamples() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Blog Posts Examples */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-accent text-primary font-montserrat font-semibold">
          Blog Posts
        </div>
        <div className="p-4 space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-montserrat font-semibold text-lg">The Power of Personal Growth And Continuous Learning</h3>
            <p className="text-sm text-gray-600 mt-1">By Rich Cherry</p>
            <p className="text-sm mt-2">Throughout my career, I've discovered that personal growth and continuous learning is far more than just a buzzword, it's a transformative force that...</p>
            <button className="mt-2 text-sm font-semibold text-accent">Read More</button>
          </div>
          
          <div className="border-b pb-3">
            <h3 className="font-montserrat font-semibold text-lg">How to Master Personal Growth And Continuous Learning in Today's World</h3>
            <p className="text-sm mt-2">Mastering personal growth and continuous learning isn't just about acquiring technical skills—it's about developing a holistic approach that adapts...</p>
            <button className="mt-2 text-sm font-semibold text-accent">Read More</button>
          </div>
        </div>
      </div>
      
      {/* Social Media Examples */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-accent text-primary font-montserrat font-semibold">
          Social Media Posts
        </div>
        <div className="p-4 space-y-4">
          <div className="border-b pb-3">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center text-white">
                <FaInstagram className="w-4 h-4" />
              </div>
              <span className="ml-2 text-sm font-semibold">Instagram</span>
            </div>
            <h3 className="font-montserrat font-semibold">Personal Growth And Continuous Learning Moment</h3>
            <p className="text-sm mt-1">Today's reminder: Personal Growth And Continuous Learning isn't a destination, it's a continuous journey...</p>
            <button className="mt-2 text-sm font-semibold text-accent">Read More</button>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                <FaLinkedin className="w-4 h-4" />
              </div>
              <span className="ml-2 text-sm font-semibold">LinkedIn</span>
            </div>
            <h3 className="font-montserrat font-semibold">Building Meaningful Connections Moment</h3>
            <p className="text-sm mt-1">Today's reminder: Building Meaningful Connections isn't a destination, it's a continuous journey...</p>
            <button className="mt-2 text-sm font-semibold text-accent">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
