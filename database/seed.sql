DROP DATABASE IF EXISTS amazonProductDescriptions;

CREATE DATABASE IF NOT EXISTS amazonProductDescriptions;

USE amazonProductDescriptions;

CREATE TABLE IF NOT EXISTS products(
  id INT AUTO_INCREMENT PRIMARY KEY,
  productName TEXT,
  productMaker TEXT,
  productDesc TEXT,
  productPrice DECIMAL,
  productRating DECIMAL,
  productNumOfRatings INT,
  productNumOfQuestionsAnswered INT
);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Bottled Water', 'Nestlé Pure Life', "New look, same 100 Percent pure quality water++.5 liter / 16.9 ounce easy to grip, resealable plastic bottled water that's perfect for lunch, or to bring to work or class++12 pack to keep at home or the office to promote healthy hydration++With no calories and no sweeteners, water is a smart alternative to sugary drinks++Consistently clean and great tasting water with our rigorous 12 step quality process. All of our PET bottles are recyclable. Once recycled, they’ll be cleaned, dried and melted to form pellets, called nurdles, that can be recycled back into the bottle or used to make other useful products",
2.23, 4.4, 1278, 118);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Hazmat Suit', 'MIRA SAFETY M',  "Size:LG/XL Height 5'7 - 6'2 Weight 160-220. Protective Suit Level C, Elastic Hood, Zipper Front. The MIRA Safety HAZ-SUIT was developed in partnership with Kappler, an international leader in personal protective apparel. This garment provides protection for a wide-range chemical, biological, radiological, and nuclear (CBRN) agents, comes in sizes that would fit children as young as 4 years old, up to large adults, and is 100% made in the U.S.A.++Effective barrier against a range of organic and inorganic chemicals, including many acids, bases, salts, greases, oils and cbrn agents.++It is used extensively by major fire departments for Hazmat Response, major hospitals for Emergency Preparedness First Receivers, major chemical companies for a wide range of potential hazardous materials exposures.++The fabric has been subjected to a variety of long-term storage conditions and exhibits no degradation in performance over time when stored properly in a cool, dry place away from direct sunlight.++Gas mask Respirator is not included. The MIRA Safety HAZ-SUIT is ideal for demanding hazardous applications where there is potential for chemical splash, even in significant exposure scenarios. Increased physical strength and even broader chemical holdout take the protection level of this fabric up a serious notch. With an extensive chemicals-tested list, the MIRA Safety HAZ-SUIT is a real workhorse.", 
129.95, 4.5, 2, 4);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Nuka-Cola Quantum', 'JONES', "Officially licensed Fallout 4 Nuka Cola Quantum, brought to you straight from the wastelands by Jones Soda Co.++Nuclear radioactive berry flavor++This rare item is drinkable++You will receive one bottle of delicious soda++400 Hit Points, 100 Action Points, 5 Rads", 
14.99, 4.1, 82, 41);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES("Bottle caps (144 pcs)", 'RiteBrew', "Help with long term storage of bottles++Oxygen absorbing abilities in the cap begins when the cap gets wet++Has an oxygen absorbing layer within the cap for safe storage of bottles", 
7.08, 4.2, 105, 5);


INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('First Aid Kit', 'First Aid Only', "Contains 299 essential first aid supplies for treating minor aches and injuries++Clear plastic liner in nylon case for organization and easy access to first aid supplies in an emergency++Soft sided, zippered case ideal for home, travel and on the go use++Not made with natural rubber latex", 
 16.82, 4.7, 4440, 105);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES("Campbell's Chicken Noodle Soup (Pack of 8)", "Campbell's", "Our classic recipe of perfectly seasoned chicken broth, egg noodles and chicken meat with no antibiotics in an on the go container++Convenient to grab and go for work, school or to enjoy at home++Ready in minutes++Enjoy anywhere work, home and school++Made for Real, Real Life", 
 12.26, 4, 540, 32);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Wet Cat Food Variety Pack', 'Purina Friskies', "2 Packs of twelve 5.5-ounce cans(total of 132-ounces)++
 Finely ground to a smooth texture++
 Contains artificial, natural flavors and salt++
 100% complete & Balanced for growth of kittens and maintenance of adult cats", 
 12.84, 4.3, 1943, 46);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Survival Knife', 'SOG', "7 INCH AUS-8 STAINLESS STEEL FULL TANG KNIFE: An ultra-sharp, formidable military knife, bushcraft knife and fixed blade knife with sheath; SOG SEAL Team fixed blade knife measures 12.3 inches in overall length++10.3 OUNCES W/ GRN HANDLE: A nearly indestructible combat knife handle for this class of large survival knives; glass-reinforced nylon offers great grip with zero maintenance++HARDENED, POWDER-COATED BLACK FULL TANG KNIFE: Cryogenic heat treatment strengthens this camping knife, hiking knife and fighting knife; powder coating hardens and protects the knife blade++HARD-MOLDED NYLON SHEATH: A tough MOLLE-compatible sheath for a razor sharp knife; great as a camping knife, belt knife, or outdoor knife sheath, and far superior to any mass-produced Bowie knife with sheath++SOG KNIFE FOR LIFE: Take care of your tactical knife and we’ll take care of you; SOG fixed blade knives with sheath are built to last, and we consider all repair and replacement requests",
115.17, 4.2, 55, 10);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Blanket', 'Bedsure', '100% Microfiber++VERSATILE USAGE SCENARIOS: Surround yourself with Bedsure Flannel Fleece Blankets while watching TV series with a mug of hot chocolate on couch, especially on chilly nights - As a perfect companion while having a comfy nap in your work with our super cozy blanket - A must-have for camping or picnic in humid weather while enjoying happy hours.++SENSATIONAL BLANKET BENEFITS: Throw Fleece Blanket for bed measured by 50"x60" is perfect for homeowners with sophisticated tastes in decoration home - The fabulous color revives this blanket with an elegant appearance to complement your room a chic feeling - Protect your luxury bed and couch from dirt and stain to keep them fresh and clean.++UNIQUE DESIGN PHILOSOPHY: 260GSM bed blanket brings you more breathable and lightweight feeling than regular cotton blanket throw to keep your body warm - Neat stitches enhance strong connections at seams and better structural strength with integrated outlook - Double-side design offers you different senses of softness to improve your sleep.++PREMIUM MICROFIBER SELECTION: Soft blanket utilizes 100% microfiber fabric all layers to last for long use and provides fade resistance better than others like cotton blanket - Microfiber blanket is NOT tend to bunch with time like cotton which has little elasticity to keep its shape - Save your time with quick drying and wrinkle resistant blanket.++DEDICATED CUSTOMER SERVICE: Available in Bedsure Flannel Fleece Blanket Throw Size 50"x60", Navy- Veritable Bedsure Trademarked Products - In Business since 1979 - Bedsure strives to provide 1-Month return and replacement service & life-time free customer service- We want our customers to be 100% happy and satisfied.',
14.99, 4.2, 8546, 296);

INSERT INTO 
products(productName, productMaker, productDesc, productPrice, productRating, productNumOfRatings, productNumOfQuestionsAnswered) 
VALUES('Solimo 99% Isopropyl Alcohol (16 fl oz)', 'Solimo', "16-fluid ounce bottle of first aid antiseptic++Contains 99% isopropyl alcohol++For technical use++Satisfaction Guarantee: We’re proud of our products. If you aren’t satisfied, we’ll refund you for any reason within a year of purchase. 1-877-485-0385 \nAn Amazon brand", 
 3.05, 4.8, 568, 43);