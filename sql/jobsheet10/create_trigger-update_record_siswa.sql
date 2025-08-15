use sekolah;

DELIMITER $$

CREATE TRIGGER trg_siswa_after_update
AFTER UPDATE ON siswa
FOR EACH ROW 
BEGIN 
  INSERT INTO log_siswa (nis, nama_lama, nama_baru, aksi, tgl)
  VALUES (NEW.nis, OLD.nama, NEW.nama, 'UPDATE', NOW());
END $$

DELIMITER ;