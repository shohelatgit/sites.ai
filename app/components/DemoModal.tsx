'use client';

import { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  demoUrl: string;
  title: string;
  onClose: () => void;
}

type DeviceSize = 'desktop' | 'tablet' | 'mobile';

export default function DemoModal({ isOpen, demoUrl, title, onClose }: DemoModalProps) {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>('desktop');

  if (!isOpen) return null;

  const getIframeWidth = () => {
    switch (deviceSize) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const getIframeHeight = () => {
    switch (deviceSize) {
      case 'mobile':
        return '667px';
      case 'tablet':
        return '1024px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-3xl font-light"
            >
              ×
            </button>
          </div>

          {/* Device Size Controls */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-gray-50">
            <span className="text-sm font-semibold text-gray-700">Preview:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setDeviceSize('mobile')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  deviceSize === 'mobile'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                📱 Mobile
              </button>
              <button
                onClick={() => setDeviceSize('tablet')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  deviceSize === 'tablet'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                📱 Tablet
              </button>
              <button
                onClick={() => setDeviceSize('desktop')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  deviceSize === 'desktop'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                💻 Desktop
              </button>
            </div>

            <div className="ml-auto flex gap-2">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                🔗 Open Full Demo
              </a>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 overflow-auto flex items-center justify-center bg-gray-100 p-6">
            {deviceSize === 'desktop' ? (
              <iframe
                key={demoUrl}
                src={demoUrl}
                title={title}
                className="w-full h-full border-none rounded-lg shadow-lg"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
              />
            ) : (
              <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
                <div className="bg-white overflow-hidden" style={{ width: getIframeWidth() }}>
                  <iframe
                    key={demoUrl}
                    src={demoUrl}
                    title={title}
                    className="border-none"
                    style={{ width: getIframeWidth(), height: getIframeHeight() }}
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
