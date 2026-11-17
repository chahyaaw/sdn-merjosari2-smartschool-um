import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';
import { supabase } from './lib/supabase';
import {
  MapPin, Phone, Mail, Building, Sparkles,
  ClipboardList, UserCheck, History, Send, RefreshCw, ExternalLink,
  AlertTriangle, LayoutDashboard, Menu, X,
  Upload, Lock, User, Image as ImageIcon, Link2, Newspaper,
  Shield, CheckCircle, LogIn, School, MessageSquare, Calendar as CalendarIcon,
  ChevronRight, Printer, Search, Eye, Download, Users, LogOut, Bell,
  Plus, Edit, Trash2
} from 'lucide-react';
import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

// ============================================================================
// 1. INITIAL REALISTIC SEED DATA & CONSTANTS (SDN MERJOSARI 2 - MALANG)
// ============================================================================

const STORAGE_KEY = 'sdn_merjosari_2_sim_v2';

const SCHOOL_INFO = {
  name: 'SDN Merjosari 2',
  npsn: '20534039',
  address: 'Jl. Joyo Utomo I, Kec. Lowokwaru, Kota Malang, Prov. Jawa Timur',
  phone: '(0341) 554020',
  email: 'sdnmerjo_sari02@gmail.com',
  visi: 'Peserta Didik Cerdas, Terampil dan Berkepribadian Baik Yang Dilandasi IMTAQ.',
  misi: 'Melaksanakan Pembelajaran Secara Efektif Agar Siswa Berkembang Optimal Sesuai Dengan Potensi Yang Dimiliki.',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Jl.%20Joyo%20Utomo%20I,%20Lowokwaru,%20Kota%20Malang,%20Jawa%20Timur&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapsExternalUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Joyo+Utomo+I,+Kec.+Lowokwaru,+Kota+Malang,+Prov.+Jawa+Timur'
};

const INITIAL_USERS = [
  {
    id: 'usr-kepsek',
    username: 'kepsek',
    role: 'kepala_sekolah',
    roleLabel: 'Kepala Sekolah',
    phone: '(0341) 554020',
    email: 'sdnmerjo_sari02@gmail.com',
    avatar: 'KS',
    photoUrl: ''
  },
  {
    id: 'usr-guru',
    username: 'guru',
    role: 'guru',
    roleLabel: 'Guru',
    phone: '(0341) 554020',
    email: 'sdnmerjo_sari02@gmail.com',
    avatar: 'GR',
    photoUrl: ''
  }
];

const INITIAL_GUESTBOOK = [
  {
    id: 'gb-1',
    regNumber: 'GT-2026-1041',
    name: 'Drs. Hendra Gunawan',
    institution: 'Dinas Pendidikan Kota Malang',
    phone: '0812-3300-1188',
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
