    const updatedUser = {
      ...currentUser,
      phone: profileForm.phone,
      photoUrl: profileForm.photoUrl
    };
    setCurrentUser(updatedUser);
    setDb(prev => ({
      ...prev,
      users: prev.users.map(u => u.id === currentUser.id ? updatedUser : u)
    }));
    setProfileForm(prev => ({ ...prev, newPassword: '', email: currentUser.email }));
    showToast(profileForm.newPassword ? 'Kata sandi akun berhasil diperbarui di Supabase!' : 'Pengaturan akun berhasil diperbarui!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-5 border-b border-slate-100">
          <UserAvatar user={{ ...currentUser, photoUrl: profileForm.photoUrl }} size="w-20 h-20 text-2xl" />
          <div className="space-y-2">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Akun Portal Resmi</span>
              <h3 className="font-['Poppins'] font-bold text-xl text-slate-900 mt-1">{currentUser.roleLabel}</h3>
              <p className="text-xs text-slate-500">{SCHOOL_INFO.name} • NPSN: {SCHOOL_INFO.npsn}</p>
            </div>
            <div>
              <label className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold cursor-pointer transition">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Foto Profil</span>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor Telepon Sekolah</label>
              <input type="text" value={profileForm.phone} onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Resmi</label>
              <input type="email" value={currentUser.email} readOnly className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50 text-slate-500" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Ubah Kata Sandi Login ({currentUser.roleLabel})</label>
            <input type="password" placeholder="Kosongkan jika tidak ingin mengubah kata sandi (minimal 8 karakter)" value={profileForm.newPassword} onChange={e => setProfileForm({ ...profileForm, newPassword: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm" />
          </div>
          <button type="submit" className="w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm">
            Simpan Perubahan Akun
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100">
          <button onClick={resetDemoData} className="w-full py-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center justify-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" /> Reset Data Simulasi ke Awal
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 9. ROOT APPLICATION COMPONENT
// ============================================================================

function MainShell() {
  const { viewMode, currentUser, toast } = useSchool();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
        @media print {
          body { background: white !important; }
          button, header, nav, footer { display: none !important; }
        }
      `}</style>

      {viewMode === 'admin' && currentUser ? (
        <AdminDashboard />
      ) : (
        <PublicPortal onOpenLogin={() => setLoginOpen(true)} />
      )}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

      {toast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs font-medium">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast.message}</span>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <SchoolProvider>
      <MainShell />
    </SchoolProvider>
  );
}
