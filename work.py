# for i in range(sheet.nrows):
# 		print(sheet.cell_value(i, 0), sheet.cell_value(i, 1), i)
# 		frappe.get_doc(
#                 dict(
#                     doctype = 'Applicants',
#                     application_stage = sheet.cell_value(i, 0), 
#                     application_status= sheet.cell_value(i, 1),

#                     isverifiedemail= sheet.cell_value(i, 2),
#                     password= sheet.cell_value(i, 3),
#                     first_name= sheet.cell_value(i, 4),
#                     bvn_firstname= sheet.cell_value(i, 5),
#                     bvn_middlename= sheet.cell_value(i, 6),

#                     surname= sheet.cell_value(i, 7),
#                     bvn_lastname= sheet.cell_value(i, 8),
#                     date_of_birth= sheet.cell_value(i, 9),
#                     # est_age= sheet.cell_value(i, 10),
#                     dob_bvn= sheet.cell_value(i, 11),
#                     birth_day= sheet.cell_value(i, 12),

#                     bvn_birth_day= sheet.cell_value(i, 13),
#                     birth_month= sheet.cell_value(i, 14),
#                     bvn_birth_month= sheet.cell_value(i, 15),
#                     birth_year= sheet.cell_value(i, 16),
#                     bvn_birth_year= sheet.cell_value(i, 17),
#                     gender= sheet.cell_value(i, 18),

#                     phone_number= sheet.cell_value(i, 19),
#                     bvn_phone= sheet.cell_value(i, 20),
#                     additional_phone= sheet.cell_value(i, 21),
#                     bvn= sheet.cell_value(i, 22),
#                     bvn_validated= sheet.cell_value(i, 23),

#                     bvn_validated_by= sheet.cell_value(i, 24),
#                     bvn_status= sheet.cell_value(i, 25),
#                     bank_name= sheet.cell_value(i, 26),
#                     nuban= sheet.cell_value(i, 27),
#                     state_of_origin= sheet.cell_value(i, 28),

#                     lga= sheet.cell_value(i, 29),
#                     residential_address= sheet.cell_value(i, 30),
#                     ward= sheet.cell_value(i, 31),
#                     state_of_residence= sheet.cell_value(i, 32),
#                     local_government_of_residence= sheet.cell_value(i, 33),
                    
#                     geozone= sheet.cell_value(i, 34),
#                     postal_code= sheet.cell_value(i, 35),
#                     application_id= sheet.cell_value(i, 36),
#                     programme= sheet.cell_value(i, 37),
#                     registration_status= sheet.cell_value(i, 38),
#                     training_status= sheet.cell_value(i, 39),
#                     program_status= sheet.cell_value(i, 40),
#                     registered= sheet.cell_value(i, 41),
#                     batch= sheet.cell_value(i, 42),

#                     active= sheet.cell_value(i, 43),
#                     reset_password_token= sheet.cell_value(i, 44),
#                     reset_password_expires= sheet.cell_value(i, 45),
#                     first_login= sheet.cell_value(i, 46),
#                     role= sheet.cell_value(i, 47),

#                     nibss_validated= sheet.cell_value(i, 48),
#                     nibss_invalidated_reason= sheet.cell_value(i, 49),
#                     isdisabled= sheet.cell_value(i, 50),
#                     physical_disability= sheet.cell_value(i, 51),
#                     physical_disability_details= sheet.cell_value(i, 52),
                    
#                     highest_level_of_education= sheet.cell_value(i, 53),
#                     qualification= sheet.cell_value(i, 54),
#                     year_attained= sheet.cell_value(i, 55),
#                     institution_type= sheet.cell_value(i, 56),
#                     institution= sheet.cell_value(i, 57),
#                     other_institution_name= sheet.cell_value(i, 58),
#                     course_of_study= sheet.cell_value(i, 59),
#                     degree_upload= sheet.cell_value(i, 60),
#                     additional_degree_upload= sheet.cell_value(i, 61),
#                     nysc_status= sheet.cell_value(i, 62),
#                     nysc_estimated_year_of_completion= sheet.cell_value(i, 63),
                    
#                     national_youth_service_certificate= sheet.cell_value(i, 64),
#                     is_currently_employed= sheet.cell_value(i, 65),
#                     monthly_earnings= sheet.cell_value(i, 66),
#                     earnings_dependencies= sheet.cell_value(i, 67),
                    
#                     id_type= sheet.cell_value(i, 68),
#                     id_number= sheet.cell_value(i, 69),
#                     id_upload= sheet.cell_value(i, 70),
#                     passport_photo= sheet.cell_value(i, 71),
#                     signup_ip= sheet.cell_value(i, 72),
                    
#                     signup_location= sheet.cell_value(i, 73),
#                     alreadyexistonnpower= sheet.cell_value(i, 74),
#                     email_address= sheet.cell_value(i, 75),
#                     # dt= sheet.cell_value(i, 1),
#                     # alreadybeneficiary = sheet.cell_value(i, 1),
#                 )
#             ).insert(ignore_permissions=True)
# 		frappe.db.commit()



# frappe.db.commit()
# ,timeout=86400

shed = "Hello {} {}".format("sherif", "Hello")
print(shed)