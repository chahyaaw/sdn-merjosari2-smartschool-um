    }
  }, [db]);

  // Restore authenticated staff session from Supabase and resolve the trusted role.
  useEffect(() => {
    if (!supabase) return;
    let active = true;

    const loadStaffProfile = async (authUser) => {
      if (!authUser) {
        if (active) {
          setCurrentUser(null);
          setViewMode('public');
        }
        return;
      }

      const { data: profile, error } = await supabase
        .from('staff_profiles')
        .select('role, display_name, phone')
        .eq('id', authUser.id)
        .single();

      if (!active) return;
      if (error || !profile || !['kepala_sekolah', 'guru'].includes(profile.role)) {
        console.error('Profil petugas tidak ditemukan/valid:', error);
        setCurrentUser(null);
        setViewMode('public');
        return;
      }

      const roleLabel = profile.role === 'kepala_sekolah' ? 'Kepala Sekolah' : 'Guru';
      setCurrentUser({
        id: authUser.id,
        email: authUser.email || '',
        role: profile.role,
        roleLabel,
        name: profile.display_name || roleLabel,
        phone: profile.phone || '',
        avatar: profile.role === 'kepala_sekolah' ? 'KS' : 'GR',
        photoUrl: ''
      });
      setViewMode('admin');
    };

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) console.error('Gagal memulihkan sesi:', error);
      loadStaffProfile(data?.session?.user || null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      // Defer the profile query to avoid locking the Supabase auth event callback.
      Promise.resolve().then(() => loadStaffProfile(session?.user || null));
    });

    return () => {
      active = false;
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3800);
  };

  const addNotification = (title, message, targetTab = 'dashboard') => {
    setDb(prev => ({
      ...prev,
      notifications: [
        { id: `notif-${Date.now()}`, title, message, time: 'Baru saja', unread: true, targetTab },
        ...prev.notifications
      ]
    }));
  };

  const resetDemoData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setDb({
      users: INITIAL_USERS,
      guestbook: INITIAL_GUESTBOOK,
      aspirasi: INITIAL_ASPIRASI,
      dokumentasi: INITIAL_DOKUMENTASI,
      pengumuman: INITIAL_PENGUMUMAN,
      agendas: INITIAL_AGENDAS,
      followUps: INITIAL_FOLLOWUPS,
      notifications: []
    });
    showToast('Data simulasi berhasil dikembalikan ke pengaturan awal!', 'info');
  };

  return (
    <SchoolContext.Provider value={{
      db, setDb,
      currentUser, setCurrentUser,
      viewMode, setViewMode,
      toast, showToast,
      addNotification,
      resetDemoData
    }}>
      {children}
    </SchoolContext.Provider>
  );
}

const useSchool = () => useContext(SchoolContext);

// ============================================================================
// 5. HELPER COMPONENTS (BADGES, MODALS, AVATARS)
// ============================================================================

function StatusBadge({ status }) {
  const styles = {
    'Baru Masuk': 'bg-sky-100 text-sky-800 border-sky-200',
    'Diverifikasi': 'bg-blue-100 text-blue-800 border-blue-200',
    'Terverifikasi': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Dalam Tindak Lanjut': 'bg-amber-100 text-amber-800 border-amber-200',
    'Sedang Berlangsung': 'bg-amber-100 text-amber-800 border-amber-200',
    'Menunggu Persetujuan': 'bg-amber-100 text-amber-800 border-amber-200',
    'Menunggu Verifikasi': 'bg-purple-100 text-purple-800 border-purple-200',
    'Perlu Revisi': 'bg-orange-100 text-orange-800 border-orange-200',
    'Perlu Perbaikan': 'bg-orange-100 text-orange-800 border-orange-200',
    'Belum Dimulai': 'bg-slate-100 text-slate-700 border-slate-200',
    'Draft': 'bg-slate-100 text-slate-700 border-slate-200',
    'Internal': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Selesai': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Disetujui': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Terbit': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Publik': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Ditolak': 'bg-rose-100 text-rose-800 border-rose-200',
    'Diarsipkan': 'bg-gray-200 text-gray-700 border-gray-300'
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles[status] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
      {status}
    </span>
  );
}

function PriorityBadge({ priority }) {
  const styles = {
    'Rendah': 'bg-slate-100 text-slate-600',
    'Sedang': 'bg-sky-100 text-sky-700',
    'Tinggi': 'bg-amber-100 text-amber-800',
    'Mendesak': 'bg-rose-100 text-rose-700 font-bold'
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${styles[priority] || 'bg-slate-100 text-slate-700'}`}>
      {priority}
    </span>
  );
}

function UserAvatar({ user, size = 'w-10 h-10 text-sm' }) {
  if (user?.photoUrl) {
    return (
      <img
        src={user.photoUrl}
        alt={user.roleLabel}
        className={`${size} rounded-full object-cover border border-slate-200 shrink-0`}
