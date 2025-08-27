<script>
  // Dark mode toggle
  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  });

  // Scroll to Top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Form Pendaftaran
  document.getElementById('formPendaftaran').addEventListener('submit', function (e) {
    e.preventDefault(); // mencegah reload halaman

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const jurusan = document.getElementById('jurusan').value;

    if (!nama || !email || !jurusan) {
      alert('Harap lengkapi semua data!');
      return;
    }

    // Simulasi kirim (bisa dihubungkan ke backend/API nantinya)
    console.log('Data dikirim:', { nama, email, jurusan });

    // Tampilkan pesan sukses
    document.getElementById('pesanSukses').style.display = 'block';

    // Reset form
    document.getElementById('formPendaftaran').reset();
  });
</script>
