use sekolah;

CREATE VIEW vw_asn_jns_kelamin AS 
   SELECT nis, nama,
      IF(MID(nis, 7, 1) = '1', 'Laki-Laki', 'Perempuan') AS jenkel
   FROM siswa;
