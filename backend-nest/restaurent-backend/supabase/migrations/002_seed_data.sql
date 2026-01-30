-- ============================================
-- Seed Data: The Terracotta Bistro
-- Run this AFTER the schema migration
-- ============================================

-- Insert the restaurant
INSERT INTO restaurants (id, name, slug, phone_display, phone_tel, timezone)
VALUES (
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'The Terracotta Bistro',
    'terracotta-bistro',
    '(555) 123-4567',
    '+15551234567',
    'Asia/Colombo'
);

-- ============================================
-- MENU SECTIONS
-- ============================================

-- Small Plates section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'Small Plates',
    '11:30 AM — 9:00 PM',
    1
);

-- Main Courses section
INSERT INTO menu_sections (id, restaurant_id, title, hours, sort_order)
VALUES (
    '22222222-2222-2222-2222-222222222222',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'Main Courses',
    NULL,
    2
);

-- ============================================
-- MENU ITEMS - Small Plates
-- ============================================

INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '11111111-1111-1111-1111-111111111111',
    'Burrata & Fig',
    18.00,
    'Creamy Puglia burrata, honey balsamic reduction, toasted sourdough crumbs, and mission figs.',
    ARRAY['V', 'GF Available'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    1
),
(
    '11111111-1111-1111-1111-111111111111',
    'Charred Octopus',
    24.00,
    'Spanish octopus, smoked paprika, silky potato foam, and chorizo-infused oil droplets.',
    ARRAY['GF'],
    'Popular',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
    2
),
(
    '11111111-1111-1111-1111-111111111111',
    'Winter Squash Salad',
    16.00,
    'Roasted butternut squash, whipped Greek feta, toasted pepitas, and a cider vinaigrette.',
    ARRAY['VG', 'GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
    3
),
(
    '11111111-1111-1111-1111-111111111111',
    'Citrus Prawn Crudo',
    22.00,
    'Chilled prawns, citrus, chili oil, sea salt.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    4
),
(
    '11111111-1111-1111-1111-111111111111',
    'Roasted Beet Carpaccio',
    16.00,
    'Goat cheese, pistachio dust, aged balsamic.',
    ARRAY['V', 'GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFD2hVEG3zIDd4lva6tuHrqIDDCNppSKicWP4c8d8x9AZJJLEVRPOJYtkSmvblN7OF39pylSNdxMENeAvglnxq5oNH_ya85_j3bcU4kHDw3zWhwQ_0G6aYSYmb2L2myzgXhEFHK-P8JQHVQN3sU8HrNa_iH1I6iORPPDpnVC6gYCG4fdJid6rUem9YTHScc7w9Y8H1Ehpu3QvwDWxSQGZPq0zaXDGKVA5rr-I-uSLMKKLULOxMPwUl0KGCHVOlVAZjEVLO8GrFJ305',
    5
),
(
    '11111111-1111-1111-1111-111111111111',
    'Truffle Deviled Eggs',
    14.00,
    'Silky yolk, truffle, chive.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOmRctpCmJXoEj1-Kb2IoVXd4xXnY4D-u37CbgNGiDaHGX2G51ObLfKG6bPSHx4ab1ANrRHpMl6d07bzkQVmG5tBl01Xs-pvHxnBmoBXgC3jVdjuyVEJWcWYXZRZe_Q4APLo4u8sUEjR7WkiOWKOv8ocjwG-BBq-Nr5a8no0pDYoZw-9J7S_WlgkIiSuvRNr5psZ76Bd6dz9N4MSzmzHr1suZtTaO2DJRsPq1lQvQhSu9jV4XMUEZi9vBESB-hGJ41iV33akyHUMjY',
    6
),
(
    '11111111-1111-1111-1111-111111111111',
    'Baked Camembert',
    18.00,
    'Garlic confit, thyme, toasted bread.',
    ARRAY['V'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    7
);

-- ============================================
-- MENU ITEMS - Main Courses
-- ============================================

INSERT INTO menu_items (section_id, name, price, description, tags, badge, image_url, sort_order)
VALUES 
(
    '22222222-2222-2222-2222-222222222222',
    'Aged Beef Tenderloin',
    42.00,
    '28-day aged, bone marrow butter, truffled pomme purée, and seasonal greens.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    1
),
(
    '22222222-2222-2222-2222-222222222222',
    'Wild Mushroom Risotto',
    28.00,
    'Carnaroli rice, foraged woodland mushrooms, aged parmesan, and fresh thyme.',
    ARRAY['V', 'GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiAjJ93L07iVqenYQsw7AhB8Abvt2M10-NxwM5exXop04eb4rAHq0wB-CE4usc2EHMD80yIeJ0lWYX6dlYFUJpzoWWThrEE9FrDxwjpxtk6lPdPElQf_b1zD0J1xeG3xJpJXzIfitYBdaCZYmkb_Robr0d1M4BrlfEvXivXuRJlLsX5o76ISodH6fCRNW0FqE1P8TdTxS1Ucf1be3pMPsKRHEnGn579OGuJqTv-DoEmslYX72K2THJDoKvtzVuYk4Mt7SuUKMiQNLv',
    2
),
(
    '22222222-2222-2222-2222-222222222222',
    'Wood-Fired Lamb Shoulder',
    44.00,
    'Smoked aubergine, mint yogurt, pomegranate glaze.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    3
),
(
    '22222222-2222-2222-2222-222222222222',
    'Herb Gnocchi',
    26.00,
    'Brown butter, sage, shaved pecorino.',
    ARRAY['V'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    4
),
(
    '22222222-2222-2222-2222-222222222222',
    'Seared Scallops',
    40.00,
    'Corn purée, pickled shallot, caper brown butter.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAD3Eu6Fab6PCOKSrtC7t_h7vE4OCEbkvsg7IzvH8s4BjqxTj7JoN0zVT9PNyxJ2s8oC7WxRueC7rmCZY6zpDeL-5aFP_wky2XfFhZAdJKM_NrsYI5lF76eOmn5BG5CDZACEHVQW6nwEjpXJZNhJaNd4J-aROwSMk5h_136oPYTb_5HJMB7WKHFDQ8ex9pV56UXpYSucb0nXEJH1fx-AUs8IoxsuCrCXSiB8wUvzj-vrPcZrxMGJAcCOcApSTN5-0eHwNFkBrehIplF',
    5
),
(
    '22222222-2222-2222-2222-222222222222',
    'Charcoal Chicken',
    32.00,
    'Lemon jus, herbs, market greens.',
    ARRAY['GF'],
    NULL,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUb629tfUd98SobMdSAyOeW6dcS54h33syLmV1AJEmWxxuxsw2tunhAVl3YKYb5uoVzwTHr71EsQzeNOzNvBrBqHgyaWfyi1a1lQdwDNUAsVgK-Cq33VEATQleFJDxJ8D16ia2mS24m7kjv-sMFYG3Y9WGMfEIPFx_MsBI3xEkjiM4LJFT0P7gM6BvGntmQsG8aQ62xsD-Ojg_EgQ8ZYquJRnjBS4iAae6g9luz-yV24EG0dUrbgti-SNtMcdYdikFxPGWNDzo2tz3',
    6
);

-- ============================================
-- SEED DATA COMPLETE
-- ============================================
