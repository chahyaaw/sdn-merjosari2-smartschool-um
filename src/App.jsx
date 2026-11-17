    purpose: 'Kunjungan Dinas',
    destination: 'Bertemu Kepala Sekolah terkait monitoring ANBK',
    notes: 'Monitoring kesiapan Asesmen Nasional Berbasis Komputer (ANBK)',
    date: '2026-11-16',
    time: '09:15',
    verified: true
  },
  {
    id: 'gb-2',
    regNumber: 'GT-2026-1042',
    name: 'Ratna Sari Dewi',
    institution: 'Wali Murid Kelas III-B',
    phone: '0857-9088-2211',
    purpose: 'Wali Murid',
    destination: 'Konsultasi dengan Wali Kelas III-B',
    notes: 'Konsultasi perkembangan literasi dan administrasi mutasi alamat',
    date: '2026-11-17',
    time: '08:30',
    verified: false
  },
  {
    id: 'gb-3',
    regNumber: 'GT-2026-1043',
    name: 'M. Rizky Pratama',
    institution: 'Universitas Negeri Malang (UM)',
    phone: '0813-5566-7788',
    purpose: 'Penelitian/Magang',
    destination: 'Pengajuan surat izin observasi kelas IV',
    notes: 'Pengajuan izin observasi media pembelajaran digital kelas IV',
    date: '2026-11-17',
    time: '10:40',
    verified: false
  }
];

const INITIAL_ASPIRASI = [
  {
    id: 'asp-1',
    ticketNumber: 'ASP-2026-8821',
    senderName: 'Bapak Sutrisno (Wali Murid)',
    contact: '0812-9988-7766',
    category: 'Sarana & Prasarana',
    subject: 'Penambahan Kanopi Area Tunggu Penjemputan Siswa',
    content: 'Mohon dipertimbangkan penambahan kanopi di area gerbang depan agar siswa tidak kehujanan saat menunggu penjemputan di musim hujan.',
    attachment: 'foto_area_gerbang.jpg',
    status: 'Dalam Tindak Lanjut',
    priority: 'Tinggi',
    createdAt: '2026-11-10',
    publicNote: 'Terima kasih atas masukannya. Usulan telah diverifikasi dan masuk dalam rencana pemeliharaan sarana bulan ini.',
    internalNote: 'Sudah disurvei oleh bagian sarpras, estimasi anggaran diajukan ke komite sekolah.',
    linkedFollowUpId: 'fu-1',
    history: [
      { date: '2026-11-10 08:20', status: 'Baru Masuk', note: 'Aspirasi diterima melalui portal publik.' },
      { date: '2026-11-11 10:00', status: 'Diverifikasi', note: 'Diverifikasi dan diteruskan ke tindak lanjut sekolah.' },
      { date: '2026-11-12 14:15', status: 'Dalam Tindak Lanjut', note: 'Dihubungkan ke modul Tindak Lanjut (TL-2026-001).' }
    ]
  },
  {
    id: 'asp-2',
    ticketNumber: 'ASP-2026-8822',
    senderName: 'Ibu Melati Kusuma',
    contact: 'melati.k@email.com',
    category: 'Akademik & Pembelajaran',
    subject: 'Apresiasi Kelas Literasi Pagi & Usulan Klub Coding Anak',
    content: 'Program baca 15 menit sebelum pelajaran sangat positif. Kami mengusulkan ekstrakurikuler pengenalan logika & coding dasar untuk kelas IV-VI.',
    attachment: '',
    status: 'Diverifikasi',
    priority: 'Sedang',
    createdAt: '2026-11-14',
    publicNote: 'Terima kasih atas apresiasi dan ide inovatifnya. Sedang dikaji oleh tim kurikulum dan kesiswaan.',
    internalNote: 'Cocok disinergikan dengan program Lab Komputer semester genap.',
    linkedFollowUpId: 'fu-2',
    history: [
      { date: '2026-11-14 13:10', status: 'Baru Masuk', note: 'Aspirasi dikirimkan melalui formulir online.' },
      { date: '2026-11-15 09:30', status: 'Diverifikasi', note: 'Diterima dan dijadwalkan pembahasan kurikulum.' }
    ]
  },
  {
    id: 'asp-3',
    ticketNumber: 'ASP-2026-8823',
    senderName: 'Anonim',
    contact: '-',
    category: 'Lainnya',
    subject: 'Perbaikan Keran Air Wastafel Dekat Kelas II',
    content: 'Keran wastafel nomor 2 di depan kelas II agak bocor sehingga air terus menetes.',
    attachment: '',
    status: 'Selesai',
    priority: 'Sedang',
    createdAt: '2026-11-05',
      publicNote: 'Keran wastafel telah diganti dengan unit baru oleh petugas kebersihan & sarpras pada 6 November 2026.',
    internalNote: 'Selesai diganti, sudah dicek berfungsi normal.',
    linkedFollowUpId: null,
    history: [
      { date: '2026-11-05 11:00', status: 'Baru Masuk', note: 'Laporan diterima.' },
      { date: '2026-11-06 08:45', status: 'Selesai', note: 'Perbaikan selesai dilakukan.' }
    ]
  }
];

const INITIAL_DOKUMENTASI = [
  {
    id: 'dok-1',
    title: 'Upacara Peringatan Hari Pahlawan & Lomba Kostum Pejuang',
    category: 'Kesiswaan',
    date: '2026-11-10',
    year: '2026',
    status: 'Terbit',
    mediaType: 'Foto',
    fileName: 'upacara_hari_pahlawan_2026.jpg',
    fileUrl: '',
    description: 'Seluruh siswa kelas I hingga VI mengikuti upacara bendera dengan khidmat dilanjutkan parade busana pahlawan nasional untuk menanamkan nilai patriotisme sejak dini.'
  },
  {
      id: 'dok-2',
    title: 'Workshop Implementasi Pembelajaran Interaktif Berbasis TIK',
    category: 'Akademik',
    date: '2026-10-24',
    year: '2026',
    status: 'Terbit',
    mediaType: 'Foto',
    fileName: 'workshop_tik_guru.jpg',
    fileUrl: '',
    description: 'Pelatihan internal guru-guru SDN Merjosari 2 dalam memanfaatkan papan interaktif dan asesmen digital guna meningkatkan keterlibatan siswa di kelas.'
  },
  {
    id: 'dok-3',
    title: 'Gerakan Sekolah Sehat & Senam Pagi Bersama',
    category: 'Ekstrakurikuler',
    date: '2026-11-01',
    year: '2026',
    status: 'Terbit',
    mediaType: 'Video',
    fileName: 'senam_jumat_sehat.mp4',
    fileUrl: '',
    description: 'Kegiatan rutin Jumat Sehat meliputi senam bersama, pemeriksaan kebersihan kuku dan gigi oleh tim UKS cilik, serta sarapan bergizi bersama.'
  }
];

const INITIAL_PENGUMUMAN = [
  {
    id: 'pg-1',
    title: 'Penerimaan Bantuan 250 Eksemplar Buku Pengayaan Perpustakaan Sekolah',
    date: '2026-11-04',
    category: 'Pengumuman Sekolah',
    visibility: 'Publik',
    photoUrl: '',
    photoName: 'penyerahan_buku_perpustakaan.jpg',
    content: 'SDN Merjosari 2 telah menerima 250 eksemplar buku bacaan literasi anak hasil kolaborasi program Gerakan Literasi Sekolah Kota Malang. Seluruh buku telah dicatat pada katalog perpustakaan dan mulai dapat dipinjam oleh seluruh siswa kelas I sampai VI pada jam istirahat maupun jam kunjung literasi.'
  },
  {
      id: 'pg-2',
    title: 'Jadwal Pelaksanaan Sumatif Akhir Semester (SAS) Ganjil Tahun Ajaran 2026/2027',
    date: '2026-11-12',
    category: 'Informasi Akademik',
    visibility: 'Publik',
    photoUrl: '',
    photoName: 'rapat_persiapan_sas.jpg',
    content: 'Diberitahukan kepada seluruh orang tua/wali murid bahwa pelaksanaan Sumatif Akhir Semester (SAS) Ganjil akan dilaksanakan mulai tanggal 1 Desember hingga 8 Desember 2026. Mohon pendampingan belajar di rumah serta menjaga kesehatan putra-putri selama masa ujian berlangsung.'
  },
  {
    id: 'pg-3',
    title: 'Himbauan Gerakan Jumat Bersih & Bawa Botol Minum Tumbler',
    date: '2026-11-15',
    category: 'Kegiatan Sekolah',
    visibility: 'Publik',
    photoUrl: '',
    photoName: 'gerakan_jumat_bersih.jpg',
    content: 'Dalam rangka mendukung budaya sekolah sehat dan pengurangan sampah plastik, seluruh siswa dihimbau membawa botol minum (tumbler) dan tempat bekal masing-masing setiap hari sekolah.'
  }
];

const INITIAL_AGENDAS = [
  {
    id: 'ag-1',
    title: 'Rapat Dinas Evaluasi Kurikulum Merdeka',
    date: '2026-11-18',
    startTime: '13:00',
    endTime: '15:00',
    location: 'Ruang Guru',
    category: 'Rapat & Dinas',
    color: 'blue',
    priority: 'Tinggi',
    recurrence: 'Sekali',
    description: 'Evaluasi capaian pembelajaran tengah semester dan persiapan rapor digital.',
    status: 'Disetujui',
    submittedBy: 'Kepala Sekolah',
    submitterId: 'usr-kepsek',
    revisionNote: '',
    attachment: 'undangan_rapat_nov.pdf'
  },
  {
    id: 'ag-2',
    title: 'Outing Class Edukasi Lingkungan & Urban Farming',
    date: '2026-11-21',
    startTime: '08:00',
    endTime: '11:30',
    location: 'Taman Edukasi Merjosari',
    category: 'Akademik',
    color: 'emerald',
    description: 'Praktik langsung pembelajaran IPAS kelas V mengenai ekosistem dan hidroponik.',
    status: 'Disetujui',
    submittedBy: 'Guru',
    submitterId: 'usr-guru',
    revisionNote: '',
    attachment: 'proposal_outing_kelas5.pdf'
  },
  {
          title: 'Sumatif Akhir Semester (SAS) Ganjil 2026/2027',
    date: '2026-12-01',
    startTime: '07:30',
    endTime: '11:00',
    location: 'Seluruh Ruang Kelas',
    category: 'Akademik',
    color: 'purple',
    description: 'Pelaksanaan penilaian akhir semester ganjil untuk kelas I sampai VI.',
    status: 'Disetujui',
    submittedBy: 'Kepala Sekolah',
    submitterId: 'usr-kepsek',
    revisionNote: '',
    attachment: 'jadwal_sas_2026.pdf'
  }
];

const INITIAL_FOLLOWUPS = [
  {
    id: 'fu-1',
    code: 'TL-2026-001',
    title: 'Pemasangan Kanopi Area Tunggu Gerbang Depan',
    sourceType: 'Aspirasi',
    sourceRef: 'ASP-2026-8821',
    actionPlan: 'Melakukan pengukuran ulang area gerbang, meminta penawaran vendor kanopi baja ringan, dan mengoordinasikan pemasangan.',
    pic: 'Kepala Sekolah',
    priority: 'Tinggi',
    deadline: '2026-11-28',
    status: 'Sedang Berlangsung',
    evidenceNote: 'Foto pengukuran lahan gerbang depan telah diunggah.',
    evidenceFileName: 'pengukuran_gerbang.jpg',
    evidenceFileUrl: '',
    timeline: [
      { date: '2026-11-12', status: 'Belum Dimulai', note: 'Tindak lanjut dibuat dari tiket aspirasi ASP-2026-8821.' },
      { date: '2026-11-15', status: 'Sedang Berlangsung', note: 'Survei teknis dan penyusunan RAB selesai.' }
    ]
  },
  {
    id: 'fu-2',
    code: 'TL-2026-002',
    title: 'Kajian Program Ekstrakurikuler Literasi & Coding Dasar',
    sourceType: 'Aspirasi',
    sourceRef: 'ASP-2026-8822',
    actionPlan: 'Menyusun silabus pengenalan logika & coding dasar menggunakan perangkat Chromebook sekolah untuk kelas IV-VI.',
    pic: 'Guru',
    priority: 'Sedang',
    deadline: '2026-11-25',
    status: 'Menunggu Verifikasi',
    evidenceNote: 'Draf silabus dan foto kesiapan ruang lab komputer telah dilampirkan.',
    evidenceFileName: 'silabus_coding_dasar.pdf',
    evidenceFileUrl: '',
    timeline: [
      { date: '2026-11-15', status: 'Sedang Berlangsung', note: 'Penyusunan modul pengenalan logika anak.' },
      { date: '2026-11-17', status: 'Menunggu Verifikasi', note: 'Draf modul selesai disusun oleh Guru.' }
    ]
  }
];
  reader.onload = (e) => {
    callback({
      name: file.name,
      type: file.type,
      url: e.target.result
    });
  };
  reader.readAsDataURL(file);
}

// ============================================================================
// 3. PRINT / PDF EXPORT HELPER FOR ACADEMIC CALENDAR
// ============================================================================

function downloadCalendarPDF(agendas, monthFilter = '') {
  const filtered = monthFilter
    ? agendas.filter(a => a.date.startsWith(monthFilter))
    : agendas;

  const printWindow = window.open('', '_blank', 'width=900,height=700');
  if (!printWindow) {
    window.print();
    return;
  }

  const rowsHtml = filtered.map((ag, idx) => `
    <tr>
      <td style="border:1px solid #cbd5e1;padding:8px;text-align:center;">${idx + 1}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;">${ag.date}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;">${ag.startTime} - ${ag.endTime}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;font-weight:600;">${ag.title}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;">${ag.category}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;">${ag.location}</td>
      <td style="border:1px solid #cbd5e1;padding:8px;">${ag.description || '-'}</td>
    </tr>
  `).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Kalender Akademik - ${SCHOOL_INFO.name}</title>
      <style>
        body { font-family: Arial, sans-serif; color: #0f172a; padding: 28px; }
        .kop { text-align: center; border-bottom: 3px double #1e3a8a; padding-bottom: 12px; margin-bottom: 20px; }
        .kop h1 { margin: 4px 0; font-size: 20px; color: #1e3a8a; }
        .kop p { margin: 2px 0; font-size: 12px; color: #475569; }
        h2 { text-align: center; font-size: 16px; margin-bottom: 16px; text-transform: uppercase; }
        table { width: 100%; border-collapse: collapse; font-size: 12px; }
        th { background-color: #1e40af; color: white; border: 1px solid #1e3a8a; padding: 8px; text-align: left; }
        .footer { margin-top: 28px; text-align: right; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="kop">
        <p>PEMERINTAH KOTA MALANG • DINAS PENDIDIKAN DAN KEBUDAYAAN</p>
        <h1>${SCHOOL_INFO.name.toUpperCase()} (NPSN: ${SCHOOL_INFO.npsn})</h1>
        <p>${SCHOOL_INFO.address} • Telp. ${SCHOOL_INFO.phone} • Email: ${SCHOOL_INFO.email}</p>
      </div>
      <h2>Kalender Akademik & Agenda Kegiatan Sekolah ${monthFilter ? `(Periode ${monthFilter})` : ''}</h2>
      <table>
        <thead>
          <tr>
            <th style="width:36px;text-align:center;">No</th>
            <th style="width:95px;">Tanggal</th>
            <th style="width:95px;">Waktu</th>
            <th>Nama Kegiatan</th>
            <th style="width:115px;">Kategori</th>
            <th style="width:130px;">Lokasi</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml || '<tr><td colspan="7" style="text-align:center;padding:16px;">Tidak ada agenda pada periode ini.</td></tr>'}
        </tbody>
      </table>
      <div class="footer">
        <p>Malang, ${new Date().toISOString().slice(0, 10)}</p>
        <p style="margin-top:48px;font-weight:bold;">Kepala ${SCHOOL_INFO.name}</p>
      </div>
      <script>
        window.onload = function() { window.print(); };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// ============================================================================
// 4. RELATIONAL APPLICATION CONTEXT & LOCALSTORAGE PERSISTENCE
// ============================================================================

const SchoolContext = createContext(null);

function SchoolProvider({ children }) {
  const loadState = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed loading state:', e);
    }
    return {
      users: INITIAL_USERS,
      guestbook: INITIAL_GUESTBOOK,
      aspirasi: INITIAL_ASPIRASI,
      dokumentasi: INITIAL_DOKUMENTASI,
      pengumuman: INITIAL_PENGUMUMAN,
      agendas: INITIAL_AGENDAS,
      followUps: INITIAL_FOLLOWUPS,
      notifications: [
        { id: 'n-1', title: 'Pengunjung Baru Tercatat', message: 'M. Rizky Pratama (UM) mengisi Buku Tamu Digital', time: 'Baru saja', unread: true, targetTab: 'bukutamu' },
        { id: 'n-2', title: 'Aspirasi Masyarakat', message: 'Tiket ASP-2026-8822 menunggu tindak lanjut', time: 'Hari ini', unread: true, targetTab: 'aspirasi' }
      ]
    };
  };

  const [db, setDb] = useState(loadState);
  const [currentUser, setCurrentUser] = useState(null);
  const [viewMode, setViewMode] = useState('public'); // 'public' | 'admin'
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      console.error('Failed saving state:', e);
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

function LoginModal({ open, onClose }) {
  const { setCurrentUser, setViewMode, showToast } = useSchool();
  const [selectedRole, setSelectedRole] = useState('kepala_sekolah');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const roleLabel = selectedRole === 'kepala_sekolah' ? 'Kepala Sekolah' : 'Guru';

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!supabase) {
      setError('Koneksi Supabase belum tersedia. Periksa konfigurasi website.');
      return;
    }
    if (!email.trim() || !password) {
      setError('Email dan kata sandi wajib diisi.');
      return;
    }

    setLoading(true);
    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password
      });

      if (authError || !authData?.user) {
        setError('Email atau kata sandi tidak sesuai. Periksa kembali akun Anda.');
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('staff_profiles')
        .select('role, display_name, phone')
        .eq('id', authData.user.id)
        .single();

      if (profileError || !profile || !['kepala_sekolah', 'guru'].includes(profile.role)) {
        await supabase.auth.signOut();
        setError('Akun berhasil dikenali, tetapi peran petugas belum terdaftar. Hubungi administrator sekolah.');
        return;
      }

      if (profile.role !== selectedRole) {
        await supabase.auth.signOut();
        setError(`Akun ini terdaftar sebagai ${profile.role === 'kepala_sekolah' ? 'Kepala Sekolah' : 'Guru'}. Silakan pilih peran yang sesuai.`);
        return;
      }

      const userRoleLabel = profile.role === 'kepala_sekolah' ? 'Kepala Sekolah' : 'Guru';
      setCurrentUser({
        id: authData.user.id,
        email: authData.user.email || email.trim(),
        role: profile.role,
        roleLabel: userRoleLabel,
        name: profile.display_name || userRoleLabel,
        phone: profile.phone || '',
        avatar: profile.role === 'kepala_sekolah' ? 'KS' : 'GR',
        photoUrl: ''
      });
      setViewMode('admin');
      setPassword('');
      showToast(`Berhasil masuk ke Portal ${userRoleLabel}!`);
      onClose();
    } catch (err) {
      console.error('Kesalahan login:', err);
      setError('Terjadi kendala saat menghubungi server. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Login Portal Petugas Sekolah" maxWidth="max-w-md">
      <div className="space-y-5">
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div className="text-xs text-blue-900 leading-relaxed">
            Masuk menggunakan email dan kata sandi akun Supabase. Hak akses akan diperiksa berdasarkan peran petugas yang terdaftar.
          </div>
        </div>
                      </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi {roleLabel}</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Masukkan kata sandi..."
              />
            </div>
          </div>

          {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold text-sm shadow-md shadow-blue-700/20 transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4" /> {loading ? 'Memeriksa akun...' : `Masuk sebagai ${roleLabel}`}
          </button>
        </form>
      </div>
    </Modal>
  );
}

// ============================================================================
// 7. PUBLIC WEBSITE INTERFACE (TAMPILAN PUBLIK)
// ============================================================================

function PublicPortal({ onOpenLogin }) {
  const { currentUser, setViewMode } = useSchool();
  const [activeTab, setActiveTab] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil Sekolah' },
    { id: 'bukutamu', label: 'Buku Tamu' },
    { id: 'dokumentasi', label: 'Dokumentasi' },
    { id: 'aspirasi', label: 'Aspirasi' },
    { id: 'pengumuman', label: 'Pengumuman & Berita' },
    { id: 'kalender', label: 'Kalender Publik' }
  ];

  const navigate = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-['Inter']">
      {/* Top Institutional Bar */}
      <div className="bg-blue-900 text-sky-100 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {SCHOOL_INFO.address}</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {SCHOOL_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> NPSN: {SCHOOL_INFO.npsn}
            </span>
          </div>
        </div>
      </div>

      {/* Main Public Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <button onClick={() => navigate('beranda')} className="flex items-center gap-3 text-left group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition">
                <School className="w-6 h-6" />
              </div>
              <div>
                <div className="font-['Poppins'] font-bold text-base sm:text-lg text-blue-950 leading-tight">
                  SDN MERJOSARI 2
                </div>
                <div className="text-[11px] font-medium text-slate-500">
                  Smart School Information & Management
                </div>
              </div>
            </button>
              
          <div>
            <h4 className="font-['Poppins'] font-semibold text-white mb-4">Jam Layanan Sekolah</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between"><span>Senin – Kamis</span><span className="text-slate-200">07.00 – 15.00 WIB</span></li>
              <li className="flex justify-between"><span>Jumat</span><span className="text-slate-200">07.00 – 11.30 WIB</span></li>
              <li className="flex justify-between"><span>Sabtu – Minggu</span><span className="text-rose-400">Tutup</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold text-white mb-4">Kontak & Alamat</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-5 px-4 text-center text-xs text-slate-500">
          © 2026 {SCHOOL_INFO.name} (NPSN: {SCHOOL_INFO.npsn}) – Smart School Information & Management System.
        </div>
      </footer>
    </div>
  );
}

// --- 7A. PUBLIC HOME (TANPA SAMBUTAN, TANPA STATISTIK SISWA/TENDIK/ROMBEL, TANPA AGENDA TERDEKAT) ---
function PublicHome({ onNavigate }) {
  const { db } = useSchool();
  const publishedDocs = db.dokumentasi.filter(d => d.status === 'Terbit');
  const publicNews = db.pengumuman.filter(p => p.visibility === 'Publik');

  return (
    <div className="space-y-14">
      {/* Clean Institutional Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-22 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              Portal Informasi & Pelayanan Publik Terpadu • NPSN {SCHOOL_INFO.npsn}
            </div>
            <h1 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Selamat Datang di <span className="text-sky-300">{SCHOOL_INFO.name}</span> Smart School System
            </h1>
            <p className="text-sky-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              Pusat informasi pendidikan, pengumuman & berita sekolah, dokumentasi kegiatan, layanan buku tamu digital, serta pelacakan aspirasi masyarakat secara transparan.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('bukutamu')}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-900/20 transition flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4" /> Isi Buku Tamu Digital
              </button>
              <button
                onClick={() => onNavigate('aspirasi')}
                className="px-5 py-3 rounded-xl bg-white text-blue-900 hover:bg-sky-50 font-semibold text-sm shadow-lg transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Kirim & Lacak Aspirasi
              </button>
              <button
                onClick={() => onNavigate('kalender')}
                className="px-5 py-3 rounded-xl bg-blue-700/60 hover:bg-blue-700 border border-sky-300/30 text-white font-semibold text-sm transition flex items-center gap-2"
              >
                <CalendarIcon className="w-4 h-4" /> Kalender Akademik
              </button>
            </div>
          </div>

          {/* Right Hero School Visual Illustration Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 space-y-5 shadow-2xl">
              <div className="h-44 rounded-2xl bg-gradient-to-tr from-sky-400/30 to-emerald-400/30 border border-white/20 flex flex-col items-center justify-center text-center p-4">
                <School className="w-14 h-14 text-emerald-300 mb-2" />
                <div className="font-['Poppins'] font-bold text-lg text-white">{SCHOOL_INFO.name}</div>
                <div className="text-xs text-sky-200 mt-1">{SCHOOL_INFO.address}</div>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">Visi Sekolah</div>
                <p className="text-sm text-sky-50 leading-relaxed">
                  "{SCHOOL_INFO.visi}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
                            <span className="text-xs font-medium opacity-90">{doc.date}</span>
                  </div>
                )}
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition">{doc.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- 7B. PUBLIC SCHOOL PROFILE (TANPA FASILITAS & TENDIK, DENGAN MAPS & DATA BARU) ---
function PublicSchoolProfile() {
  const [subTab, setSubTab] = useState('identitas');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-gradient-to-r from-blue-800 to-sky-600 rounded-3xl p-8 text-white">
        <span className="text-xs uppercase tracking-wider text-sky-200 font-semibold">Profil Satuan Pendidikan</span>
        <h1 className="font-['Poppins'] text-2xl sm:text-3xl font-bold mt-1">Profil {SCHOOL_INFO.name}</h1>
        <p className="text-sm text-sky-100 mt-2 max-w-2xl">
          Identitas resmi sekolah, sejarah singkat, visi dan misi pendidikan, serta lokasi peta digital sekolah.
        </p>
      </div>

      {/* Sub-navigation: Only Identitas & Sejarah, Visi & Misi, Lokasi Maps */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        {[
          { id: 'identitas', label: 'Identitas & Sejarah' },
          { id: 'visimisi', label: 'Visi & Misi' },
          { id: 'lokasi', label: 'Lokasi & Google Maps' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setSubTab(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              subTab === t.id ? 'bg-blue-700 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subTab === 'identitas' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-['Poppins'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <Building className="w-5 h-5 text-blue-700" /> Identitas Sekolah
            </h3>
            <dl className="divide-y divide-slate-100 text-sm">
              {[
                ['Nama Sekolah', SCHOOL_INFO.name],
                ['NPSN', SCHOOL_INFO.npsn],
                ['Jenjang / Status', 'Sekolah Dasar (SD) / Negeri'],
                ['Kurikulum', 'Kurikulum Merdeka'],
                ['Alamat', SCHOOL_INFO.address],
                ['Nomor Telepon', SCHOOL_INFO.phone],
                ['Email Resmi', SCHOOL_INFO.email]
              ].map(([k, v], idx) => (
                <div key={idx} className="py-2.5 flex justify-between gap-4">
                  <dt className="text-slate-500 shrink-0">{k}</dt>
                  <dd className="font-semibold text-slate-800 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-['Poppins'] font-bold text-lg text-slate-900 flex items-center gap-2">
              <History className="w-5 h-5 text-emerald-600" /> Sejarah Singkat
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {SCHOOL_INFO.name} berdiri sebagai wujud komitmen pelayanan pendidikan dasar negeri bagi masyarakat di wilayah Kelurahan Merjosari, Kecamatan Lowokwaru, Kota Malang, Provinsi Jawa Timur.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Berlokasi strategis di {SCHOOL_INFO.address}, sekolah ini terus berkembang dalam menyelenggarakan pembelajaran yang efektif, berkarakter IMTAQ, dan adaptif terhadap pemanfaatan teknologi informasi bagi siswa maupun pelayanan publik.
            </p>
          </div>
        </div>
      )}
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Contoh: Budi Santoso, S.Pd."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Instansi / Asal / Wali Murid *</label>
              <input
                type="text"
                required
                value={form.institution}
                onChange={e => setForm({ ...form, institution: e.target.value })}
                placeholder="Contoh: Dinas Pendidikan / Wali Kelas IV"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor HP / WhatsApp *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="0812-xxxx-xxxx"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori Keperluan</label>
              <select
                value={form.purpose}
                onChange={e => setForm({ ...form, purpose: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option>Kunjungan Dinas</option>
                <option>Wali Murid</option>
                <option>Penelitian/Magang</option>
                <option>Kerjasama / Mitra</option>
                <option>Lainnya</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Tujuan Kunjungan *</label>
            <input
              type="text"
              required
              value={form.destination}
              onChange={e => setForm({ ...form, destination: e.target.value })}
              placeholder="Tuliskan tujuan kunjungan Anda (misal: Bertemu Kepala Sekolah / Wali Kelas IV / Urusan Surat)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Keterangan Tambahan (Opsional)</label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
              placeholder="Catatan tambahan mengenai kunjungan Anda..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-700/20 transition flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" /> Simpan & Dapatkan Nomor Kunjungan
          </button>
        </form>
            )}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-['Poppins'] font-bold text-slate-900 text-base group-hover:text-blue-700 transition">{doc.title}</h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">{doc.description}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
                <span>Buka Detail Dokumentasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!selectedDoc} onClose={() => setSelectedDoc(null)} title="Detail Dokumentasi Kegiatan" maxWidth="max-w-2xl">
        {selectedDoc && (
          <div className="space-y-4">
            {selectedDoc.fileUrl && selectedDoc.mediaType === 'Foto' ? (
              <img src={selectedDoc.fileUrl} alt={selectedDoc.title} className="w-full max-h-80 object-cover rounded-2xl border border-slate-200" />
            ) : (
              <div className="h-52 rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/30 text-xs font-semibold">{selectedDoc.category}</span>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">{selectedDoc.mediaType} • {selectedDoc.date}</span>
                </div>
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 mx-auto opacity-80 mb-2" />
                  <p className="text-xs text-white/90">{selectedDoc.fileName || 'Dokumentasi Resmi Sekolah'}</p>
                </div>
                <div />
              </div>
            )}
            <h3 className="font-['Poppins'] text-xl font-bold text-slate-900">{selectedDoc.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{selectedDoc.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

// --- 7E. PUBLIC ASPIRASI & TICKET TRACKER (DENGAN PILIHAN "LAINNYA") ---
function PublicAspirasi() {
  const { db, setDb, showToast, addNotification } = useSchool();
  const [form, setForm] = useState({
    senderName: '',
    contact: '',
    category: 'Sarana & Prasarana',
    subject: '',
    content: '',
    attachment: ''
  });
  const [createdTicket, setCreatedTicket] = useState(null);
  const [trackInput, setTrackInput] = useState('ASP-2026-8821');

  const trackedItem = useMemo(() => {
    return db.aspirasi.find(a => a.ticketNumber.toLowerCase() === trackInput.trim().toLowerCase());
  }, [db.aspirasi, trackInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject.trim() || !form.content.trim()) {
      showToast('Subjek dan isi aspirasi wajib diisi!', 'error');
      return;
    }
    const now = new Date();
    const ticketNumber = `ASP-${now.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toTimeString().slice(0, 5);

    const newItem = {
      id: `asp-${Date.now()}`,
      ticketNumber,
      senderName: form.senderName.trim() || 'Anonim',
      contact: form.contact.trim() || '-',
      category: form.category,
      subject: form.subject,
      content: form.content,
      attachment: form.attachment,
      status: 'Baru Masuk',
      priority: 'Sedang',
      createdAt: dateStr,
      publicNote: 'Aspirasi Anda telah masuk dalam antrean verifikasi pihak sekolah.',
      internalNote: '',
      linkedFollowUpId: null,
      history: [
        { date: `${dateStr} ${timeStr}`, status: 'Baru Masuk', note: 'Aspirasi dikirimkan melalui portal publik.' }
      ]
    };
  const firstDayIdx = new Date(yearNum, monthNum - 1, 1).getDay();
  const todayStr = '2026-11-17';

  const colorMap = {
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    amber: 'bg-amber-100 text-amber-800 border-amber-300',
    purple: 'bg-purple-100 text-purple-800 border-purple-300'
  };

  const handleDownloadPDF = () => {
    showToast('Menyiapkan dokumen PDF Kalender Akademik...');
    downloadCalendarPDF(filtered, currentMonth);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">Kalender Akademik & Agenda Resmi</span>
          <h1 className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Kalender Kegiatan {SCHOOL_INFO.name}</h1>
          <p className="text-sm text-slate-500">Jadwal kegiatan akademik, kesiswaan, dan agenda resmi sekolah.</p>
        </div>
        <button
          onClick={handleDownloadPDF}
          className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold shadow-sm flex items-center gap-2 self-start"
        >
          <Download className="w-4 h-4" /> Unduh Kalender PDF
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="month"
          value={currentMonth}
          onChange={e => setCurrentMonth(e.target.value)}
          className="px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 w-full sm:w-auto"
        />
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari nama agenda atau lokasi..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm outline-none"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-3.5 py-2 rounded-xl border border-slate-200 text-sm bg-white w-full sm:w-auto"
        >
          {categories.map(c => <option key={c} value={c}>Kategori: {c}</option>)}
        </select>
      </div>

      {/* Monthly Grid */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200 text-center text-xs font-bold text-slate-600 py-3">
          {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 auto-rows-fr">
          {Array.from({ length: firstDayIdx }).map((_, idx) => (
            <div key={`empty-${idx}`} className="min-h-[95px] border-b border-r border-slate-100 bg-slate-50/40" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, idx) => {
            const day = idx + 1;
            const dateStr = `${currentMonth}-${String(day).padStart(2, '0')}`;
            const dayEvents = filtered.filter(ev => ev.date === dateStr);
            const isToday = dateStr === todayStr;

            return (
              <div key={day} className={`min-h-[95px] p-2 border-b border-r border-slate-100 ${isToday ? 'bg-sky-50/60' : ''}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${isToday ? 'bg-blue-700 text-white' : 'text-slate-700'}`}>
                    {day}
                  </span>
                  {isToday && <span className="text-[10px] font-bold text-blue-700">Hari Ini</span>}
                </div>
                <div className="space-y-1">
                  {dayEvents.map(ev => (
                    <div key={ev.id} className={`px-1.5 py-1 rounded text-[10px] font-semibold border truncate ${colorMap[ev.color] || colorMap.blue}`} title={`${ev.title} (${ev.startTime})`}>
                      {ev.startTime} {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
        
  const pendingApprovals = db.agendas.filter(a => a.status === 'Menunggu Persetujuan');
  const guruNeedsRevision = db.agendas.filter(a => a.submitterId === currentUser.id && a.status === 'Perlu Revisi');

  const openCreateModal = () => {
    setEditingAgenda(null);
    setForm({
      title: '',
      date: '2026-11-25',
      startTime: '08:00',
      endTime: '10:00',
      location: 'Aula Utama',
      category: 'Akademik',
      color: 'blue',
      description: '',
      attachment: ''
    });
    setModalOpen(true);
  };

  const openEditModal = (ag) => {
    setEditingAgenda(ag);
    setForm({
      title: ag.title,
      date: ag.date,
      startTime: ag.startTime,
      endTime: ag.endTime,
      location: ag.location,
      category: ag.category,
      color: ag.color || 'blue',
      description: ag.description || '',
      attachment: ag.attachment || ''
    });
    setModalOpen(true);
  };

  const saveAgenda = (e, asDraft = false) => {
    if (e) e.preventDefault();
    if (!form.title.trim()) {
      showToast('Nama kegiatan wajib diisi!', 'error');
      return;
    }

    // Kepala Sekolah directly approves; Guru saves as Draft or submits for Kepsek verification
    const nextStatus = isKepsek
      ? 'Disetujui'
      : (asDraft ? 'Draft' : 'Menunggu Persetujuan');

    if (editingAgenda) {
      setDb(prev => ({
        ...prev,
        agendas: prev.agendas.map(a =>
          a.id === editingAgenda.id
            ? {
                ...a,
                ...form,
                status: nextStatus,
                revisionNote: isGuru && !asDraft ? '' : a.revisionNote
              }
            : a
        )
      }));

      if (isGuru && !asDraft) {
        addNotification(
          'Pengajuan / Revisi Agenda Guru',
          `Guru mengajukan agenda "${form.title}" (${form.date}) untuk diverifikasi.`,
          'kalender'
        );
        showToast('Pengajuan / revisi agenda berhasil dikirim ke Kepala Sekolah!');
      } else if (asDraft) {
        showToast('Perubahan disimpan sebagai Draft.');
      } else {
        showToast('Agenda sekolah diperbarui & tersinkronisasi ke Kalender Publik!');
      }
    } else {
      const newItem = {
        id: `ag-${Date.now()}`,
        ...form,
        status: nextStatus,
        submittedBy: currentUser.roleLabel,
        submitterId: currentUser.id,
        revisionNote: ''
      };
      setDb(prev => ({ ...prev, agendas: [newItem, ...prev.agendas] }));

      if (isGuru && !asDraft) {
        addNotification(
          'Pengajuan Agenda Kegiatan Baru',
          `Guru mengajukan kegiatan "${form.title}" pada ${form.date} untuk verifikasi Kepala Sekolah.`,
          'kalender'
        );
        showToast('Pengajuan agenda berhasil dikirim ke Portal Kepala Sekolah!');
      } else if (asDraft) {
        showToast('Draft pengajuan agenda berhasil disimpan.');
      } else {
        showToast('Agenda baru berhasil ditambahkan & otomatis tampil di Kalender Publik!');
      }
    }
    setModalOpen(false);
  };
                        rows={3}
                value={revisionNoteInput}
                onChange={e => setRevisionNoteInput(e.target.value)}
                placeholder="Tuliskan catatan persetujuan, alasan penolakan, atau poin revisi bagi Guru..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => handleVerifyDecision('Disetujui')}
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs"
              >
                Setujui (Terbit Publik)
              </button>
              <button
                type="button"
                onClick={() => handleVerifyDecision('Perlu Revisi')}
                className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-xs"
              >
                Minta Revisi
              </button>
              <button
                type="button"
                onClick={() => handleVerifyDecision('Ditolak')}
                className="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-xs"
              >
                Tolak Pengajuan
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// --- 8C. MANAJEMEN ASPIRASI MASYARAKAT (KEPALA SEKOLAH & GURU) ---
function AdminAspirasiModule({ onNavigate }) {
  const { db, setDb, showToast } = useSchool();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);
  const [editState, setEditState] = useState({ status: '', priority: '', publicNote: '', internalNote: '' });

  const filtered = db.aspirasi.filter(a => {
    const matchSearch =
      a.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
      a.subject.toLowerCase().includes(search.toLowerCase()) ||
      a.senderName.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'Semua' || a.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const openManageModal = (item) => {
    setSelectedItem(item);
    setEditState({
      status: item.status,
      priority: item.priority,
      publicNote: item.publicNote || '',
      internalNote: item.internalNote || ''
    });
  };

  const handleSaveStatus = () => {
    const now = new Date();
    const stamp = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`;

    setDb(prev => ({
      ...prev,
      aspirasi: prev.aspirasi.map(a => {
        if (a.id !== selectedItem.id) return a;
        return {
          ...a,
          status: editState.status,
          priority: editState.priority,
          publicNote: editState.publicNote,
          internalNote: editState.internalNote,
          history: [
            ...a.history,
            {
              date: stamp,
              status: editState.status,
              note: editState.publicNote || `Status diperbarui menjadi ${editState.status}`
            }
          ]
        };
      })
    }));
    showToast(`Tiket ${selectedItem.ticketNumber} berhasil diperbarui!`);
    setSelectedItem(null);
  };
    });
  };

  const createFollowUp = (e) => {
    e.preventDefault();
    const code = `TL-2026-${Math.floor(100 + Math.random() * 899)}`;
    const newItem = {
      id: `fu-${Date.now()}`,
      code,
      ...form,
      sourceType: isGuru ? 'Aspirasi' : form.sourceType,
      evidenceNote: form.evidenceFileName ? `Lampiran awal: ${form.evidenceFileName}` : '',
      timeline: [{ date: new Date().toISOString().slice(0, 10), status: form.status, note: 'Rencana tindak lanjut dibuat.' }]
    };
    setDb(prev => ({ ...prev, followUps: [newItem, ...prev.followUps] }));
    showToast(`Tindak lanjut ${code} berhasil dibuat!`);
    setModalOpen(false);
  };

  const openDetail = (fu) => {
    setDetailModal(fu);
    setProgressUpdate({
      status: fu.status,
      note: '',
      evidenceNote: fu.evidenceNote || '',
      evidenceFileName: fu.evidenceFileName || '',
      evidenceFileUrl: fu.evidenceFileUrl || ''
    });
  };

  const saveProgress = () => {
    const today = new Date().toISOString().slice(0, 10);
    setDb(prev => ({
      ...prev,
      followUps: prev.followUps.map(f => {
        if (f.id !== detailModal.id) return f;
        return {
          ...f,
          status: progressUpdate.status,
          evidenceNote: progressUpdate.evidenceNote,
          evidenceFileName: progressUpdate.evidenceFileName,
          evidenceFileUrl: progressUpdate.evidenceFileUrl,
          timeline: [
            ...f.timeline,
            { date: today, status: progressUpdate.status, note: progressUpdate.note || `Status diperbarui ke ${progressUpdate.status}` }
          ]
        };
      })
    }));
    showToast('Progres & bukti tindak lanjut berhasil disimpan!');
    setDetailModal(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-['Poppins'] font-bold text-slate-900">
            {isGuru ? 'Manajemen Tindak Lanjut Aspirasi (Portal Guru)' : 'Manajemen Tindak Lanjut Terpadu'}
          </h3>
          <p className="text-xs text-slate-500">
            {isGuru
              ? 'Daftar tindak lanjut yang bersumber langsung dari data aspirasi masyarakat beserta unggah foto bukti pelaksanaan.'
              : 'Kelola tindak lanjut aspirasi maupun internal lengkap dengan lampiran foto atau dokumen bukti.'}
          </p>
        </div>
        <button
          onClick={() => {
            setForm({
              title: '',
              sourceType: 'Aspirasi',
              sourceRef: db.aspirasi[0]?.ticketNumber || '',
              actionPlan: '',
              pic: currentUser.roleLabel,
              priority: 'Sedang',
              deadline: '2026-11-30',
              status: 'Belum Dimulai',
              evidenceFileName: '',
              evidenceFileUrl: ''
            });
            setModalOpen(true);
          }}
          className="px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 self-start"
        >
          <Plus className="w-4 h-4" /> {isGuru ? 'Tambah Tindak Lanjut Aspirasi' : 'Tambah Tindak Lanjut'}
        </button>
      </div>
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
