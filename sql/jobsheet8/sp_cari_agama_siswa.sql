use sekolah;

DELIMITER $$
CREATE PROCEDURE sp_cari_agama(
  IN m_nama_agama VARCHAR(11)
)
BEGIN 
  SELECT Nama, Jumlah
  FROM vw_jlm_agama_siswa
  WHERE Nama = m_nama_agama;
END $$
DELIMITER ;
