-- no 1.
create database db_blog_posts;
use db_blog_posts;

-- no 2
create table users (
  id int primary key,
  name varchar(100));
  
create table categories (
  id int primary key,
  nama varchar(100));
  
create table blog_posts(
 id int primary key, 
 title varchar (100),
 body text,
 author_id int ,
 foreign key ( author_id) references users(id));
 
CREATE TABLE post_categories (
  post_id INT,
  category_id INT,
  PRIMARY KEY (post_id, category_id),
  FOREIGN KEY (post_id) REFERENCES blog_posts(id) ,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- no 3
insert into users values
  ('1','Jhon Doe'),
  ('2','Robert'),
  ('3','Frank'),
  ('4','Jane');
  
insert into blog_posts values 
(1, 'Algorithm', 'this is article algorithm',1),
(2, 'Lorem Ipsum', 'Lorem Ipsum dolor sit amet',1),
(3, 'NodeJs', 'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine.',2),
(4, 'ReactJs', 'ReactJS is JavaScript library for building user interfaces',4),
(5, 'Git', 'Git is a free and open source distributed version control system designed to handle everything from small to very
large projects with speed and efficiency',3),
(6, 'BasketBall', 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a 
rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through 
the defender''s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop)', 2);

insert into categories values 
   (1,'Basic'),
   (2, 'Library'),
   (3, 'Unknown'),
   (4, 'Sport');
   
insert into post_categories values 
   (1,1),
   (2,2),
   (3,1),
   (3,2),
   (4,2),
   (4,1),
   (5,1),
   (6,4);

-- no 4
SELECT bp.id, bp.title, bp.body, u.name AS author_name
FROM blog_posts bp
JOIN users u ON bp.author_id = u.id
WHERE u.name = 'Jhon Doe';

-- no 5
SELECT c.nama AS category_name,
       bp.title AS post_title,
       u.name AS author_name
FROM post_categories pc
JOIN blog_posts bp ON pc.post_id = bp.id
JOIN categories c ON pc.category_id = c.id
JOIN users u ON bp.author_id = u.id
WHERE c.nama = 'Basic';

-- no 6
select c.nama as category_name,
       bp.title as post_title,
       bp.body as body
from blog_posts bp 
join users u on bp.author_id = u.id
join post_categories pc on bp.id = pc.post_id
join categories c on pc.category_id= c.id
where u.name in ('Robert','Frank');

-- no 7
SELECT u.name AS author_name,
       c.nama AS category_name
FROM blog_posts bp
JOIN users u ON bp.author_id = u.id
JOIN post_categories pc ON bp.id = pc.post_id
JOIN categories c ON pc.category_id = c.id
WHERE bp.id IN (
  SELECT post_id
  FROM post_categories
  GROUP BY post_id
  HAVING COUNT(category_id) >= 2
)
ORDER BY u.name, c.nama; 

-- no 8
select u.name as Author_name , c.nama as Category_name 
from users u 
join blog_posts b on u.id = b.author_id
join post_categories p on b.id= p.post_id
join categories c on p.category_id = c.id 
where b.id in (
 select p.post_id
 from post_categories p
 group by post_id
 having count(category_id)=1);




