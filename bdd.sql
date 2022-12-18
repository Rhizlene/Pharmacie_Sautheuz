CREATE DATABASE pharmacie;

USE pharmacie;

CREATE TABLE ordonnance (
    ordo_Id int AUTO_INCREMENT not null,
    ordo_Date date not null,
    ordo_PatId int not null,
    ordo_MedId int not null,
    ordo_PathId int not null,
    primary key (ordo_Id)
);

CREATE TABLE patient (
    pat_Id int auto_increment not null,
    pat_Nom varchar(20) not null,
    pat_Prenom varchar(20) not null,
    pat_Naissance date not null,
    pat_NumSecu varchar(30) not null,
    pat_NumMut varchar(30) not null,
    pat_MutId int not null,
    primary key (pat_Id)
);

CREATE TABLE mutuelle (
    mut_Id int auto_increment not null,
    mut_Nom varchar(60) not null,
    mut_Taux float not null,
    primary key (mut_Id)
);

CREATE TABLE pathologie (
    path_Id int auto_increment not null,
    path_Nom varchar(100) not null,
    primary key (path_Id)
);

CREATE TABLE medecin (
    med_Id int auto_increment not null,
    med_Nom varchar(20) not null,
    med_Prenom varchar(20) not null,
    med_DipId int not null,
    med_Num varchar(20) not null,
    med_Permis blob,
    primary key (med_Id)
);

CREATE TABLE diplome (
    dip_Id int auto_increment not null,
    dip_Nom varchar(60) not null,
    primary key (dip_Id)
);

CREATE TABLE medicament (
    medic_Id int auto_increment not null,
    medic_Nom varchar(20) not null,
    medic_QteStock int not null,
    medic_Type varchar(20) not null,
    primary key (medic_Id)
);

CREATE TABLE posologie (
    pos_Id int auto_increment not null,
    pos_OrdoId int not null,
    pos_MedicQte int not null,
    pos_Duree int not null,
    pos_MedicId int not null,
    primary key (pos_Id)
);

CREATE TABLE pharmacien (
    phar_Id int auto_increment not null,
    phar_Nom varchar(20) not null,
    phar_Prenom varchar(20) not null,
    phar_Mdp varchar(100) not null,
    phar_Identifiant varchar(20) not null,
    primary key (phar_Id)
);

Alter TABLE ordonnance 
Add constraint FK_OrdoPatient foreign key (ordo_PatId) references patient(pat_Id),
add constraint FK_OrdoMedecin foreign key (ordo_MedId) references medecin(med_Id),
add constraint FK_OrdoPathologie foreign key (ordo_PathId) references pathologie(path_Id);

Alter TABLE patient add constraint FK_PatMutuelle foreign key (pat_MutId) references mutuelle(mut_Id);

Alter TABLE medecin add constraint FK_MedDiplome foreign key (med_DipId) references diplome(dip_Id);

Alter TABLE posologie
add constraint FK_PosMedicament foreign key (pos_MedicId) references medicament(medic_Id),
add constraint FK_PosOrdonnance foreign key (pos_OrdoId) references ordonnance(ordo_Id);

insert into medecin (med_Nom, med_Prenom, med_DipId, med_Num) VALUES ('DÉMISSION', 'Manu', 1, '06 06 06 06 06');
insert into medecin (med_Nom, med_Prenom, med_DipId, med_Num) VALUES ('CACHESEX', 'Jean', 2, '07 07 07 07 07');

insert into diplome (dip_Nom) VALUES ('Chirurgien');
insert into diplome (dip_Nom) VALUES ('Cardiologue');

insert into patient (pat_Nom, pat_Prenom, pat_Naissance, pat_NumSecu, pat_NumMut, pat_MutId) VALUES ('MERAD', 'Krad', DATE '1972-10-19', '1 85 05 72 006 084 36', '98532001', 1);
insert into patient (pat_Nom, pat_Prenom, pat_Naissance, pat_NumSecu, pat_NumMut, pat_MutId) VALUES ('ROUTINE', 'Vladimir', DATE '1968-07-07', '1 56 07 68 007 007 77', '95892000', 2);

insert into mutuelle (mut_Nom, mut_Taux) values ('Harmonie mutuelle', 65);
insert into mutuelle (mut_Nom, mut_Taux) values ('La mutuelle generale', 62);

insert into pathologie (path_Nom) values ('Cancer de la prostate');
insert into pathologie (path_Nom) values ('Cancer du sein');

insert into posologie (pos_OrdoId, pos_MedicQte, pos_Duree, pos_MedicId) values (1, 6, 3, 1);
insert into posologie (pos_OrdoId, pos_MedicQte, pos_Duree, pos_MedicId) values (1, 10, 1, 2);
insert into posologie (pos_OrdoId, pos_MedicQte, pos_Duree, pos_MedicId) values (2, 9, 2, 3);

insert into medicament (medic_Nom, medic_QteStock, medic_Type) values ('Smecta', 15, 'comprimé');
insert into medicament (medic_Nom, medic_QteStock, medic_Type) values ('Taz', 51, 'Stupéfiant');
insert into medicament (medic_Nom, medic_QteStock, medic_Type) values ('Doliprane', 11, 'pastille');

insert into ordonnance (ordo_Date, ordo_MedId, ordo_PathId, ordo_PatId) values (DATE '2022-10-19', 2, 1, 1);
insert into ordonnance (ordo_Date, ordo_MedId, ordo_PathId, ordo_PatId) values (DATE '2022-12-25', 1, 2, 2);

INSERT INTO pharmacien (phar_Nom, phar_Prenom, phar_Mdp, phar_Identifiant) VALUES ('AUBISTROT', 'Pascal', '123', 'Vive_La_Buvette');
INSERT INTO pharmacien (phar_Nom, phar_Prenom, phar_Mdp, phar_Identifiant) VALUES ('DELACOUETTE', 'Laurent', '456', 'Il_Fait_Pas_Chaud');
INSERT INTO pharmacien (phar_Nom, phar_Prenom, phar_Mdp, phar_Identifiant) VALUES ('DOCCASION', 'Catherine', '789', 'Pas_Chere_Payee');