use sekolah;

DELIMITER $$ 
CREATE TRIGGER trg_siswa_after_insert
AFTER INSERT ON siswa
FOR EACH ROW
BEGIN 
  INSERT INTO log_siswa(aksi, nis, nama_baru,tgl)
  VALUES ('INSERT', NEW.nis, NEW.nama,now());
END $$
DELIMITER ;