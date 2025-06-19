import { Stethoscope } from "lucide-react";
import LoginForm from "@/components/login-form";
import HospitalBanner from "@/components/hospital-banner";
import Background from "@/public/bg6.jpg";
export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 p-4"
      style={{ background: `url(${Background.src})`, backgroundSize: "cover" }}
    >
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header - Full Width */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4 flex items-center">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <Stethoscope size={28} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white ml-3">RS Hasan Sadikin</h1>
          </div>

          {/* Login Form */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Selamat Datang
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Silakan login untuk terhubung ke jaringan rumah sakit
            </p>

            <LoginForm />

            <div className="mt-6 text-center text-sm text-gray-500">
              Dengan login, Anda menyetujui syarat dan ketentuan penggunaan
              layanan ini.
            </div>
          </div>

          {/* Banner Slider - Below Form */}
          <div className="px-6 pb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-3">
              Informasi Layanan
            </h2>
            <HospitalBanner />
          </div>
        </div>
      </div>
    </main>
  );
}
