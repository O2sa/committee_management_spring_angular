1 الهيكل المعماري للنظام (مكونات النظام)
        1.1 المجموعات والعمليات
 1.1.1تهيئة النظام
تهيئة ثوابت النظام
    • عرض قائمة ثوابت النظام
    • إضافة ثوابت 
    • تعديل الثوابت
إدارة المستخدمين
    • عرض قائمة المستخدمين
    • إضافة مستخدم  
    • تعديل مستخدم

وظائف أعضاء اللجان
    • عرض قائمة وظائف أعضاء اللجان
    • إضافة وظيفة
    • تعديل الوظيفة


الأعضاء
    • عرض قائمة الأعضاء
    • إضافة عضو
    • تعديل بيانات العضو
    • إيقاف العضو
    • إلغاء إيقاف العضو

اللجان
    • عرض قائمة اللجان
    • إضافة لجنة 
    • تعديل لجنة
    • عرض الأعضاء المرتبطين باللجنة 
    • إضافة عضو للجنة

2 وظائف النظام
2.1 ثوابت النظام

أنواع الهوية
 (البطاقة الشخصية، البطاقة العائلية، جواز السفر، البطاقة العسكرية).
الحالة الاجتماعية
يتم تعريف الحالة الاجتماعية في ثوابت النظام وهي (متزوج، عازب، أرمل، مطلق).
المؤهل العلمي
 (أساسي، ثانوي، دبلوم، بكالوريوس، ماجستير، دكتوراة).
صفات أعضاء اللجان
 (الرئيس، نائب الرئيس، المشرف، المدير التنفيذي، عضواً).
أنواع اللجان
 (لجنة اشرافية عليا (على مستوى المحافظة)، لجنة اشرافية فرعية (على مستوى المديرية)، لجنة مجتمعية).
مستوى عنوان اللجان
يتم تعريف مستوى عنوان اللجان في ثوابت النظام.. (المحافظة، المديرية، العزلة أو القرية).
نوع السكن
(ملك – ايجار)
الجنس
(ذكر – انثى)
صلة القرابة
(اخ – اب – ابن – عم – خال)
جهة العمل
(حكومي – خاص)



3.2.1.1 إضافة عضو



متطلبات وظيفيه
    • يجب ان يقوم النظام بفحص الحقول الإجبارية المحددة(اسم العضو- الجنس- الحالة الاجتماعية- رقم الجوال- نوع الهوية- رقم الهوية- تاريخ إصدارها- محل الإصدار- تاريخ الميلاد- عنوان السكن الحالي- المؤهل العلمي- الوظيفة/ الصفة في المجتمع- شخص يمكن الرجوع اليه- رقم جوال القريب- الحالة) عدم السماح بإضافتها فارغة.
    • يجب ان يكون فحص الحقول الإجبارية بحسب ترتيب الحقول داخل نافذة الإضافة.
    • يجب ان يقوم النظام بإجبار المستخدم على كتابة "الاسم الرباعي (الثلاثي مع اللقب)" للعضو قبل نجاح تنفيذ العملية.
    • يجب ان يقوم النظام بإجبار المستخدم على كتابة (رقم الهاتف) من 6 ارقام اجباري في حالة تم إضافة رقم هاتف للعضو.
    • يجب ان يسمح النظام بتكرار رقم الهاتف لأكثر من عضو.
    • يجب تقييد المستخدم بإدخال قيم عدديه فقط والبدء ب (........77,73,71.70) وتحديد 9 ارقام فقط في حقل رقم الجوال.
    • يجب ان يسمح النظام بتكرار رقم الجوال لأكثر من عضو.
    • يجب ان لا يسمح النظام بتكرار نفس العضو.
    • يحب ان يقوم النظام بتحديد نمط الرقم التسلسلي للعضو بـ(YY000001). يتم إضافة حقل جديد بهذا الاسم (sequence_id)
    • يحب ان يقوم النظام ببدء الترقيم في حقل " الرقم التسلسلي للعضو" من الرقم (1) عند بداية كل سنة.
    • يجب ان يقوم النظام بتسجيل رقم العضو تلقائياً وأن لا يسمح بتعديله.
    • يجب ان يقوم النظام بتسجيل تاريخ الإضافة (تاريخ اليوم).
    • يجب ان يقوم النظام بتحديد الحد الأدنى لعمر العضو (18).
    • يجب ان يقوم النظام بتسجيل (عمر العضو) تلقائياً عن طريق حساب السنوات بين (تاريخ الإضافة وتاريخ الميلاد).
    • يجب ان لا يسمح النظام بإضافة تاريخ اصدار الهوية أصغر من تاريخ الإضافة.
    • يجب ان يقوم النظام بإجبار المستخدم على إدخال اربع مستويات للعنوان الخاص بالعضو.
    • يجب ان يقوم النظام بتنبيه المستخدم بأن العضو مرتبط بلجان بنفس العنوان عند تعديل (عنوان العضو).

وينطبق نفس المتطلبات على تعديل الأعضاء


3.3.1.1 إضافة تشكيل لجنة



متطلبات وظيفيه
    • يجب ان يقوم النظام بفحص الحقول الإجبارية المحددة(رقم اللجنة- رقم نوع اللجنة- رقم اللجنة الاب- عنوان اللجنة- الحالة) وعدم السماح بإضافتها فارغة.
    • يجب ان يكون فحص الحقول الإجبارية بحسب ترتيب الحقول داخل نافذة الإضافة.
    • يجب أن يقوم النظام بحصر قيمة الحقل (رقم اللجنة الاب) وفقاً للآتي:
        ◦ صفرا : إذا كان نوع اللجنة إشرافية عليا.
        ◦ رقم لجنة اشرافية عليا: إذا كان نوع اللجنة اشرافية فرعية.
        ◦ رقم لجنة اشرافية فرعية: اذا كان نوع اللجنة مجتمعية.
        ◦ لا يمكن أن يكون رقم لجنة مجتمعية.
        
    • يجب ان يقوم النظام بالعرض التلقائي للوظائف والصفات (وترتيبها تصاعديا حسب قيمة حقل الاولوية) المرتبطة بالقالب الذي يتم اختياره.


3.3.1.2.1 إضافة عضو الى اللجنة


متطلبات وظيفيه
    • يجب ان يسمح النظام بإمكانية تكرار الصفة إذا كانت الصفة (عضواً) ولا يسمح لما دونها.



```php

<?php

// جدول الثوابت
CREATE TABLE resource_db.re_users (
  id_user int NOT NULL AUTO_INCREMENT COMMENT 'رقم المستخدم',
  user_name varchar(100) NOT NULL COMMENT 'اسم المستخدم',
  full_name varchar(100) NOT NULL COMMENT 'الاسم الرباعي للمستخدم', 
  password varchar(100) NOT NULL COMMENT 'كلمة السر',
  status tinyint NOT NULL DEFAULT 1 COMMENT 'حالة المستخدم نشط =1 غير نشط =0',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (id_user)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

// =========================================================================================
// =========================================================================================

// جدول الثوابت
CREATE TABLE resource_db.re_constants (
  id_constants int NOT NULL AUTO_INCREMENT COMMENT 'رقم الثوابت',
  name_constants varchar(100) NOT NULL COMMENT 'اسم ثوابت النظام',
  code_constants varchar(100) NOT NULL COMMENT 'ترميز ثوابت النظام', 
  status tinyint NOT NULL DEFAULT 1 COMMENT 'الحالة نشط =1 غير نشط =0',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (id_constants)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.re_constants
ADD CONSTRAINT FK_re_constants_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);

// =========================================================================================
// =================  مثال على كيفية اضافة ثوابت
/*
مثال لتعريف انواع الهوية ليتم استخدامها في بيانات الاعضاء
البطاقة الشخصية، البطاقة العائلية، جواز السفر، البطاقة العسكرية
اولا نقوم بترميز نوع الهوية ويفضل ان يكون نفس اسم الحق من الاعضاء المرتبط بنوع الهوية وهو هذا الحقل 
id_type
INSERT INTO re_constants(name_constants,code_constants) values
('البطاقة الشخصية','id_type'),
('البطاقة العائلية','id_type'),
('جواز السفر','id_type'),
('البطاقة العسكرية','id_type');

الان عند جلب بيانات نوع الهوية ستقوم بجلبها سيصبح الاستعلام بهذا الشكل

SELECT * FROM re_constants WHERE code_constants ='id_type';



*/



// =========================================================================================
// =========================================================================================
// جدول وضائف الأعضاء
CREATE TABLE resource_db.cc_member_job (
  job_id bigint NOT NULL AUTO_INCREMENT COMMENT 'رقم الوظيفة',
  job_title varchar(100) NOT NULL COMMENT 'الوظيفة/ الصفة في المجتمع',
  status tinyint NOT NULL DEFAULT 1 COMMENT  'الحالة نشط =1 غير نشط =0',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (job_id)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.cc_member_job
ADD CONSTRAINT FK_cc_member_job_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);


// =========================================================================================
// =========================================================================================
// جدول الاعضاء
CREATE TABLE resource_db.cc_members_data (
  member_id bigint NOT NULL AUTO_INCREMENT COMMENT 'رقم العضو',
  member_name varchar(80) NOT NULL COMMENT 'اسم العضو',
  gender int NOT NULL COMMENT 'الجنس',
  sociality int NOT NULL COMMENT 'الحالة الاجتماعية',
  phone bigint DEFAULT NULL COMMENT 'الهاتف الثابت',
  mobile bigint NOT NULL COMMENT 'رقم الجوال',
  id_type int NOT NULL COMMENT 'نوع الهوية',
  id_number bigint NOT NULL COMMENT 'رقم الهوية',
  id_date date NOT NULL COMMENT 'تاريخ إصدارها',
  id_location varchar(30) NOT NULL COMMENT 'محل الاصدار',
  birth_place varchar(30) NOT NULL COMMENT 'محل الميلاد',
  birthdate date NOT NULL COMMENT 'تاريخ الميلاد',
  accomm_type int DEFAULT NULL COMMENT 'نوع السكن',
  qualification int NOT NULL COMMENT 'المؤهل العلمي',
  job_title bigint NOT NULL COMMENT 'الوظيفة/ الصفة في المجتمع',
  workplace varchar(30) DEFAULT NULL COMMENT 'مكان العمل',
  work_type int DEFAULT NULL COMMENT 'جهة العمل',
  experience varchar(200) DEFAULT NULL COMMENT 'الخبرات',
  photo varchar(100) DEFAULT NULL COMMENT 'صورة العضو',
  person varchar(30) NOT NULL COMMENT 'شخص يمكن الرجوع اليه',
  person_relation int DEFAULT NULL COMMENT 'صلة القرابة',
  person_mobile bigint NOT NULL COMMENT 'رقم جوال القريب',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (member_id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_accomm_type FOREIGN KEY (accomm_type)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_gender FOREIGN KEY (gender)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_id_type FOREIGN KEY (id_type)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_job_title FOREIGN KEY (job_title)
REFERENCES resource_db.cc_member_job (job_id);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_person_relation FOREIGN KEY (person_relation)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_qualification FOREIGN KEY (qualification)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_sociality FOREIGN KEY (sociality)
REFERENCES resource_db.re_constants (id_constants);

ALTER TABLE resource_db.cc_members_data
ADD CONSTRAINT FK_cc_members_data_work_type FOREIGN KEY (work_type)
REFERENCES resource_db.re_constants (id_constants);

// =========================================================================================
// =========================================================================================
// جدول ايقاف الاعضاء وتنشيطها 
/* 
 عند عملية الايقاف يتم تسجيلة في هذا الجدول مع سبب الايقاف والنوع يدخل بالقيمة 1 وتاريخ الايقاف
*/
CREATE TABLE resource_db.cc_suspend_members (
  mem_suspend_id bigint NOT NULL AUTO_INCREMENT COMMENT 'رقم العملية',
  member_id bigint NOT NULL COMMENT 'رقم العضو',
  suspend_type int NOT NULL COMMENT 'النوع تم الايقاف = 1 ، الغاء الايقاف = 0',
  suspend_date date NOT NULL COMMENT 'تاريخ الإيقاف',
  suspend_reason text NOT NULL COMMENT 'سبب الإيقاف',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (mem_suspend_id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.cc_suspend_members
ADD CONSTRAINT FK_cc_suspend_members_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);

ALTER TABLE resource_db.cc_suspend_members
ADD CONSTRAINT FK_cc_suspend_members_member_id FOREIGN KEY (member_id)
REFERENCES resource_db.cc_members_data (member_id);

// =========================================================================================
// =========================================================================================
// جدول تشكيل اللجان
CREATE TABLE resource_db.cc_committee_data (
  committee_id bigint NOT NULL AUTO_INCREMENT COMMENT 'رقم اللجنة',
  committee_type_id int NOT NULL COMMENT 'رقم نوع اللجنة',
  partner_id int NOT NULL DEFAULT 0 COMMENT 'رقم اللجنة الاب',
  list_id bigint DEFAULT NULL COMMENT 'رقم الكشف',
  status tinyint NOT NULL DEFAULT 1 COMMENT  'الحالة نشط =1 غير نشط =0',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL,
  PRIMARY KEY (committee_id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.cc_committee_data
ADD CONSTRAINT FK_cc_committee_data_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);

ALTER TABLE resource_db.cc_committee_data
ADD CONSTRAINT FK_cc_committee_data_committee_type_id FOREIGN KEY (committee_type_id)
REFERENCES resource_db.re_constants (id_constants);


// =========================================================================================
// =========================================================================================
// جدول ربط الأعضاء باللجان

CREATE TABLE resource_db.cc_committee_members (
  committee_id bigint NOT NULL COMMENT 'رقم اللجنة',
  member_id bigint NOT NULL COMMENT 'رقم العضو',
  job_title bigint NOT NULL COMMENT 'الوظيفة/ الصفة في المجتمع',
  position int NOT NULL COMMENT 'الصفة',
  add_by bigint DEFAULT NULL,
  add_date datetime DEFAULT NULL
)
ENGINE = INNODB,
CHARACTER SET utf8mb3,
COLLATE utf8_general_ci;

ALTER TABLE resource_db.cc_committee_members
ADD CONSTRAINT FK_cc_committee_members_add_by FOREIGN KEY (add_by)
REFERENCES resource_db.re_users (id_user);

ALTER TABLE resource_db.cc_committee_members
ADD CONSTRAINT FK_cc_committee_members_committee_id FOREIGN KEY (committee_id)
REFERENCES resource_db.cc_committee_data (committee_id);

ALTER TABLE resource_db.cc_committee_members
ADD CONSTRAINT FK_cc_committee_members_job_title FOREIGN KEY (job_title)
REFERENCES resource_db.cc_member_job (job_id);

ALTER TABLE resource_db.cc_committee_members
ADD CONSTRAINT FK_cc_committee_members_member_id FOREIGN KEY (member_id)
REFERENCES resource_db.cc_members_data (member_id);

ALTER TABLE resource_db.cc_committee_members
ADD CONSTRAINT FK_cc_committee_members_position FOREIGN KEY (position)
REFERENCES resource_db.re_constants (id_constants);






```