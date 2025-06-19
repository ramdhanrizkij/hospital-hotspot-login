"use client";

import Link from "next/link";
import {
  Stethoscope,
  Download,
  Upload,
  Clock,
  SignalHigh,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConnectedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 flex items-center">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <Stethoscope size={28} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white ml-3">RS Hasan Sadikin</h1>
          </div>

          <div className="p-6 text-center">
            <div className="bg-green-50 inline-flex items-center px-3 py-1 rounded-full mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">
                Terhubung
              </span>
            </div>
            <p className="text-gray-600">
              Anda telah berhasil terhubung ke jaringan rumah sakit
            </p>
          </div>

          {/* Connection Info */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Informasi Koneksi
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <SignalHigh className="mr-2 h-5 w-5 text-green-500" />
                    <span>Status</span>
                  </div>
                  <span className="font-medium text-green-600">Aktif</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 h-5 w-5 text-gray-500" />
                    <span>Durasi</span>
                  </div>
                  <span className="font-medium">00:15:32</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Download className="mr-2 h-5 w-5 text-blue-500" />
                    <span>Download</span>
                  </div>
                  <span className="font-medium">2.5 Mbps</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Upload className="mr-2 h-5 w-5 text-indigo-500" />
                    <span>Upload</span>
                  </div>
                  <span className="font-medium">1.2 Mbps</span>
                </div>
              </div>
            </div>

            {/* Remaining Time */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-blue-800 font-medium">Sisa Waktu</h3>
                <span className="text-blue-800 font-bold">01:45:28</span>
              </div>
              <div className="mt-2 bg-blue-100 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full w-[65%]"></div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Mulai Menjelajah
              </Button>

              <Link href="/" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Putuskan Koneksi
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              Terima kasih telah menggunakan layanan rumah sakit kami.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
