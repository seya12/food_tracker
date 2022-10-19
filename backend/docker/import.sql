set character_set_client = "utf8mb4";
create table product
(
    sid       int auto_increment
        primary key,
    name      varchar(200) null,
    size      int          null,
    imageLink varchar(200) null,
    rating    int          null
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tracker.product (name, size, imageLink, rating) VALUES ('MjAMjAM zarte Ente & Geflügel', 200, 'https://www.sandras-tieroase.de/media/image/product/1247/md/mjamjam-zarte-ente-gefluegel-200g.jpg', 4);
INSERT INTO tracker.product (name, size, imageLink, rating) VALUES ('MjAMjAM Hühnchen', 400, 'https://www.sandras-tieroase.de/media/image/product/4103/md/mjamjam-purer-fleischgenuss-huehnchen-pur-200g.jpg', 5);
INSERT INTO tracker.product (name, size, imageLink, rating) VALUES ('MjAMjAM purer Fleischgenuss Pute pur', 800, 'https://www.sandras-tieroase.de/media/image/product/4104/md/mjamjam-purer-fleischgenuss-pute-pur-200g.jpg', 3);
INSERT INTO tracker.product (name, size, imageLink, rating) VALUES ('MjAMjAM Mahlzeit mit leckeren Herzen', 200, 'https://www.sandras-tieroase.de/media/image/product/1243/md/mjamjam-mahlzeit-mit-leckeren-herzen-200g.jpg', 1);

create table category
(
    sid  int auto_increment
        primary key,
    size int          not null,
    name varchar(200) null
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO tracker.category (size, name) VALUES (200, null);
INSERT INTO tracker.category (size, name) VALUES (400, null);
INSERT INTO tracker.category (size, name) VALUES (800, null);