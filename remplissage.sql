insert into utilisateur (identifiant,motdepasse,premium)
values
('Adamprem','Chazal',1),
('Adamnonprem','Severac',0);


insert into vetement (nomvetement,pourchaud,pourfroid,pourpluie,poursoleil,pourvent,categorie,style,proprietaire)
values
('t-shirt bleu',1,0,0,1,0,'haut',1,1),
('short',1,0,0,1,0,'bas',1,1),
('pantalon déchiré',0,0,1,0,1,'bas',1,2),
('tongs',1,0,0,1,0,'chaussures',1,1),
('t-shirt rouge',1,0,0,1,0,'haut',1,1),
('casquette',1,0,0,1,0,'accessoire',1,1),
('rien',1,0,0,1,0,'accessoire',1,2);

insert into style (nomstyle)
values
('détendu'),
('professionnel');

insert into tenue (nomtenue,proprietaire,haut,bas,chaussures,accessoire,temps)
values
('Détendu Homme au soleil',1,1,2,4,6,1);

insert into temps (nomtemps,ventviolent,chaud,froid,soleil,pluie)
values 
('chaud et ensoleillé',0,1,0,1,0);

