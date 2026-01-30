-- ============================================
-- Seed Data: Additional Restaurants for Testing
-- Run this AFTER the initial seed data
-- ============================================

-- ============================================
-- RESTAURANT 2: The Golden Fork
-- ============================================

INSERT INTO restaurants (id, name, slug, phone_display, phone_tel, timezone)
VALUES (
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'The Golden Fork',
    'golden-fork',
    '(555) 987-6543',
    '+15559876543',
    'America/New_York'
);

-- Small Plates section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '33333333-3333-3333-3333-333333333333',
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'Appetizers',
    '12:00 PM — 10:00 PM',
    1
);

-- Main Courses section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '44444444-4444-4444-4444-444444444444',
    'b2c3d4e5-f6a7-8901-bcde-f23456789012',
    'Entrees',
    NULL,
    2
);

-- Menu Items - Appetizers
INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '33333333-3333-3333-3333-333333333333',
    'Crispy Calamari',
    16.00,
    'Lightly breaded squid rings with spicy marinara and lemon aioli.',
    ARRAY['GF Available'],
    'House Favorite',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    1
),
(
    '33333333-3333-3333-3333-333333333333',
    'Stuffed Mushrooms',
    14.00,
    'Baby portobello caps filled with herb cream cheese and breadcrumbs.',
    ARRAY['V'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
    2
),
(
    '33333333-3333-3333-3333-333333333333',
    'Shrimp Cocktail',
    19.00,
    'Jumbo prawns with zesty cocktail sauce and fresh horseradish.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
    3
);

-- Menu Items - Entrees
INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '44444444-4444-4444-4444-444444444444',
    'New York Strip Steak',
    48.00,
    '14oz prime cut with garlic herb butter, truffle fries, and asparagus.',
    ARRAY['GF'],
    'Chef''s Choice',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    1
),
(
    '44444444-4444-4444-4444-444444444444',
    'Lobster Linguine',
    52.00,
    'Fresh Maine lobster tail with cherry tomatoes in a light cream sauce.',
    ARRAY[],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    2
),
(
    '44444444-4444-4444-4444-444444444444',
    'Vegetable Primavera',
    28.00,
    'Seasonal vegetables sautéed with penne in olive oil and fresh basil.',
    ARRAY['V', 'VG'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    3
);

-- ============================================
-- RESTAURANT 3: Sakura Garden
-- ============================================

INSERT INTO restaurants (id, name, slug, phone_display, phone_tel, timezone)
VALUES (
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Sakura Garden',
    'sakura-garden',
    '(555) 246-8135',
    '+15552468135',
    'Asia/Tokyo'
);

-- Starters section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '55555555-5555-5555-5555-555555555555',
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Starters',
    '11:00 AM — 11:00 PM',
    1
);

-- Signature Dishes section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '66666666-6666-6666-6666-666666666666',
    'c3d4e5f6-a7b8-9012-cdef-345678901234',
    'Signature Dishes',
    NULL,
    2
);

-- Menu Items - Starters
INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '55555555-5555-5555-5555-555555555555',
    'Edamame',
    8.00,
    'Steamed young soybeans lightly salted with sea salt.',
    ARRAY['V', 'VG', 'GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    1
),
(
    '55555555-5555-5555-5555-555555555555',
    'Gyoza Dumplings',
    12.00,
    'Pan-fried pork and vegetable dumplings with ponzu dipping sauce.',
    ARRAY[],
    'Best Seller',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
    2
),
(
    '55555555-5555-5555-5555-555555555555',
    'Miso Soup',
    6.00,
    'Traditional dashi broth with tofu, wakame seaweed, and green onion.',
    ARRAY['V', 'GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
    3
),
(
    '55555555-5555-5555-5555-555555555555',
    'Agedashi Tofu',
    10.00,
    'Crispy fried silken tofu in warm tentsuyu broth with grated daikon.',
    ARRAY['V'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    4
);

-- Menu Items - Signature Dishes
INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '66666666-6666-6666-6666-666666666666',
    'Dragon Roll',
    22.00,
    'Shrimp tempura, avocado, eel, and tobiko with unagi sauce.',
    ARRAY['GF Available'],
    'Signature',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    1
),
(
    '66666666-6666-6666-6666-666666666666',
    'Chicken Teriyaki',
    24.00,
    'Grilled chicken glazed with house teriyaki, served with steamed rice.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    2
),
(
    '66666666-6666-6666-6666-666666666666',
    'Salmon Sashimi',
    28.00,
    'Premium Norwegian salmon sliced thin, served with wasabi and pickled ginger.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    3
),
(
    '66666666-6666-6666-6666-666666666666',
    'Wagyu Beef Bowl',
    45.00,
    'A5 wagyu strips over seasoned rice with soft poached egg and truffle oil.',
    ARRAY['GF'],
    'Premium',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    4
);

-- ============================================
-- SEED COMPLETE
-- ============================================
-- Test URLs:
-- http://localhost:5173/golden-fork
-- http://localhost:5173/sakura-garden
-- ============================================
