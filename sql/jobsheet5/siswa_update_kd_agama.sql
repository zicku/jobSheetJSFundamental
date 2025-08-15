use sekolah;

update siswa 
set kd_agama = '1'
where nama regexp '^[NS]';

update siswa 
set kd_agama = '4'
where nama regexp '^D';