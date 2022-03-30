CREATE TABLE utilisateur(
    idutilisateur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    identifiant VARCHAR(100),
    motdepasse VARCHAR(100),
    premium INT,
    constraint chk_premium check (premium in (0,1)));


CREATE TABLE vetement(
    idvetement INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomvetement VARCHAR(100),
    pourchaud INT,
    pourfroid INT,
    pourpluie INT,
    pourvent INT,
    poursoleil INT,
    style INT,
    categorie VARCHAR(100),
    proprietaire INT,
    constraint ce_vete FOREIGN KEY (style) REFERENCES style(idstyle),
    constraint chk_chaud check (pourchaud in (0,1)),
    constraint chk_froid check (pourfroid in (0,1)),
    constraint chk_pluie check (pourpluie in (0,1)),
    constraint chk_vent check (pourvent in (0,1)),
    constraint chk_soleil check (poursoleil in (0,1)),
    constraint ce_proprietaire FOREIGN KEY (proprietaire) REFERENCES utilisateur(idutilisateur),
    constraint chk_categorie check (categorie in ('haut', 'bas', 'chaussures','accessoire')));
    


CREATE TABLE style(
    idstyle INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomstyle VARCHAR(100));



CREATE TABLE tenue(
    idtenue INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomtenue VARCHAR(100),
    proprietaire INT,
    haut INT,
    bas INT,
    chaussures INT,
    accessoire INT,
    style INT,
    temps INT,
    constraint ce1_tenue FOREIGN KEY (proprietaire) REFERENCES utilisateur(idutilisateur),
    constraint ce2_tenue FOREIGN KEY (haut) REFERENCES vetement(idvetement),
    constraint ce3_tenue FOREIGN KEY (bas) REFERENCES vetement(idvetement),
    constraint ce4_tenue FOREIGN KEY (chaussures) REFERENCES vetement(idvetement),
    constraint ce5_tenue FOREIGN KEY (accessoire) REFERENCES vetement(idvetement),
    constraint ce6_tenue FOREIGN KEY (style) REFERENCES style(idstyle),
    constraint ce7_tenue FOREIGN KEY (temps)REFERENCES temps(idtemps));

CREATE TABLE temps(
    idtemps INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nomtemps VARCHAR(100),
    ventviolent INT,
    chaud INT,
    froid INT,
    soleil INT,
    pluie INT,
    constraint chk_froid2 check (froid in (0,1)),
    constraint chk_chaud2 check (chaud in (0,1)),
    constraint chk_soleil2 check (soleil in (0,1)),
    constraint chk_pluie2 check (pluie in (0,1)),
    constraint chk_vent2 check (ventviolent in (0,1)));
