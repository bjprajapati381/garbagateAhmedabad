import React from 'react';

const GarbaOutfits = () => {
  const outfits = [
    {
      id: 1,
      title: 'Falguni Pathak Pre-Navratri',
      location: 'Shankus Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 1499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404343-qjnjwdstlg-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/falguni-pathak-pre-navratri/ET00404343'
    },
    {
      id: 2,
      title: 'GIFT CITY GARBA FESTIVAL 2024',
      location: 'GIFT City: Gandhinagar',
      description: 'Navratri Celebration',
      price: '₹ 459 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409094-yltageakht-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/gift-city-garba-festival-2024/ET00409094'
    },
    {
      id: 3,
      title: 'RASSLEELA by Reel to Real Events',
      location: 'Green Place: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398133-mmebrqpffz-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rassleela-by-reel-to-real-events/ET00398133'
    },
    {
      id: 4,
      title: 'Mirchi Rock and Dhol 2024',
      location: 'Aman Aakash Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406531-fvwdnvlpsc-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/mirchi-rock-and-dhol-2024/ET00406531'
    },
    {
      id: 5,
      title: 'Probuzz Garba & Mandli ',
      location: '9 Brothers Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403526-pnjbqtqjfs-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/probuzz-garba-mandli/ET00403526'
    },
    {
      id: 6,
      title: 'Suvarna Navratri 2024 with Kirtidan Gadhvi',
      location: 'Suvarn - The Premium Lawn: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 899 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411945-qydtabzpre-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/suvarna-navratri-2024-with-kirtidan-gadhvi/ET00411945'
    },
    {
      id: 7,
      title: 'Mandli Garba',
      location: 'Madhuban Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408189-vtqsqkgmqq-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/mandli-garba/ET00408189'
    },
    {
      id: 8,
      title: 'KEYSTONE NA GARBA 2024 - Day 1',
      location: 'M K Farm House: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412221-plzkakehcd-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/day-1-keystone-na-garba-2024/ET00412221'
    },
    {
      id: 9,
      title: 'Garba Carnival 2024',
      location: 'R.M. Patel Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403120-dzusjhxclg-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/garba-carnival-2024/ET00403120'
    },
    {
      id: 10,
      title: 'Norta 2024 - Navratri Celebration',
      location: 'Anmol Farm and Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407332-zglsbckflf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/norta-2024/ET00407332'
    },
    {
      id: 11,
      title: 'Colors Gujarati RangRatri 2024',
      location: 'Shantam Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 149 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411901-mtwsdpwxgy-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/colors-gujarati-rangratri-2024/ET00411901'
    },
    {
      id: 12,
      title: 'Amdavad Na Garba  Adani Shantigram Cricket Ground',
      location: 'Adani Shantigram Cricket Ground: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410729-utukpayqlu-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/amdavad-na-garba/ET00410729'
    },
    {
      id: 13,
      title: 'PYC Navratri Festival 2024',
      location: 'M K Farm House: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 399 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410071-lzqanvsdev-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/pyc-navratri-festival-2024/ET00410071'
    },
    {
      id: 14,
      title: 'AMDAVADI BEATS ',
      location: 'Umiya Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00405948-gecpdtlxsd-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/amdavadi-beats/ET00405948'
    },
    {
      id: 15,
      title: 'RANGRATRI - NAVRATRI 2K24',
      location: 'RK Farm & Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406500-duytkdtubj-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rangratri/ET00406500'
    },
    {
      id: 16,
      title: 'Parth Oza- Raas Ratri 2024',
      location: 'Club O7: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409109-xfpevqkqvk-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/raas-ratri-2024/ET00409109'
    },
    {
      id: 17,
      title: 'Karnavati University Garba Mahotsav 2024',
      location: 'Karnavati University: Gandhinagar',
      description: 'Navratri Celebration',
      price: '₹ 1500 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA3IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410707-yjdaezdpjj-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/karnavati-university-garba-mahotsav-2024/ET00410707'
    },
    {
      id: 18,
      title: 'Shankus Dandiya 2024 At Karnavati Club',
      location: 'Karnavati Club: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408041-wnlzlmzezc-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/shankus-dandiya-2023-at-karnavati-club/ET00408041'
    },
    {
      id: 19,
      title: 'Prachin DESIGNER MANDLI GARBA',
      location: 'Palm Greens Club & Resort: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00406154-emfluzzdxk-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/cept-designer-mandali/ET00406154'
    },
    {
      id: 20,
      title: 'AARAMBH GARBA',
      location: 'Rajpath Club: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407318-rskvpdsrec-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/aarambh-garba/ET00407318'
    },
    {
      id: 21,
      title: 'SHERI GARBA',
      location: 'Club Babylon: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 1800 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407954-sajyulgukw-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/sheri-garba-navratri-2024/ET00407954'
    },
    {
      id: 22,
      title: 'Premium Mandli',
      location: 'Madhav Party Lawns, Bhadaj: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 999 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409438-yavmpkpuyw-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/premium-mandli/ET00409438'
    },
    {
      id: 23,
      title: 'Navrangi Navratri',
      location: 'Tathastu Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409270-qefhasnaap-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/navrangi-navratri/ET00409270'
    },
    {
      id: 24,
      title: 'Shankus Dandiya 2024 At Shankus Farm',
      location: 'Shanku`s Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408036-kbhsmqurqr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/shankus-dandiya-2024-at-shankus-farm/ET00408036'
    },
    {
      id: 25,
      title: 'Shubh Mandali',
      location: 'Grand Luxxe Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409830-fjsxsnncjg-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/shubh-mandali/ET00409830'
    },
    {
      id: 26,
      title: 'Raatladi The Mandli Garba',
      location: 'Mahendra Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404227-hgarzxsrzx-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/raatladi-the-mandli-garba/ET00404227'
    },
    {
      id: 27,
      title: 'GARBA FEST',
      location: 'The Ummed: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 249',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411056-pxdqjycawh-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/garba-fest/ET00411056'
    },
    {
      id: 28,
      title: 'Karnavati No Sanedo Sesion 3',
      location: 'Aagaman Party Plot & Resort: Ahamedabad',
      description: 'Navratri Celebration',
      price: '₹ 99 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00368116-nggrxgqzjs-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/karnavati-no-sanedo/ET00368116'
    },
    {
      id: 29,
      title: 'Maa Ni Mandvi Rasleela 2024',
      location: 'Maa Ni Mandvi: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 999',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408392-caggdxdqrr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/maa-ni-mandvi-rasleela-2024/ET00408392'
    },
    {
      id: 30,
      title: 'Prachin Garba & Mandli',
      location: 'Palm Greens Clubs: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00405596-lqwvujzxpf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/prachin-garba-mandli/ET00405596'
    },
    {
      id: 31,
      title: 'DIVINE GARBA',
      location: 'Blue Lagoon Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407594-unsuazvuqm-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/divine-garba/ET00407594'
    },
    {
      id: 32,
      title: 'Vrundavan Sheri Garba 2024',
      location: 'Vrundavan Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411356-xwrgcequgb-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/vrundavan-sheri-garba-2024/ET00411356'
    },
    {
      id: 33,
      title: 'Eka RasGarba 2024 by LABH Creation',
      location: 'Eka Club : Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 400',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403745-eqatnbbpva-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/eka-rasgrba-2024-by-labh-creation/ET00403745'
    },
    {
      id: 34,
      title: 'Red Raas Season 15',
      location: 'Rameshwar Farm and Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409461-ftpvutpxnn-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/red-raas-season-15/ET00409461'
    },
    {
      id: 35,
      title: 'Roots Garba',
      location: 'Nirvana Party Lawn: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 2999 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA5IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409594-erunmzsjyt-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/roots-garba/ET00409594'
    },
    {
      id: 36,
      title: 'Sheri Raas',
      location: 'Vivenza by Gopi: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409176-qagmamkpue-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/sheri-raas/ET00409176'
    },
    {
      id: 37,
      title: 'United Garba Of Amdavad ',
      location: 'United Garba Ground: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411265-aalvuqrjvt-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/united-garba-of-amdavad/ET00411265'
    },
    {
      id: 38,
      title: 'Maa Navratri 2024',
      location: 'Ravani box cricket and farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410660-hvrusmnwrx-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/maa-navratri-2024/ET00410660'
    },
    {
      id: 39,
      title: 'Dholki Garba',
      location: 'Dholki garba: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 1000',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412322-wszfmvcfls-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dholki-garba/ET00412322'
    },
    {
      id: 40,
      title: 'Raslila Nikol',
      location: 'Shagun Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338518-qsjlujsjph-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/raslila-nikol/ET00338518'
    },
    {
      id: 41,
      title: 'Hashtag Navratri',
      location: 'S K Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407530-gfsupgekwe-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/hashtag-navratri/ET00407530'
    },
    {
      id: 42,
      title: 'Rang Sheri Garba 2024 - East Ahmedabad Navratri',
      location: 'Rang Sheri Garba: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 200 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411734-hcrtbzcbwh-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rang-sheri-garba/ET00411734'
    },
    {
      id: 43,
      title: 'BHAVY RAAS',
      location: 'Manidhar Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409285-fgjeqznnze-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/bhavy-raas/ET00409285'
    },
    {
      id: 44,
      title: 'Kesariya Garba Navrat 2024',
      location: 'Ram Katha Ground: Gandhinagar',
      description: 'Navratri Celebration',
      price: '₹ 300 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409711-wppleghlte-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/kesariya-garba-navrat-2024/ET00409711'
    },
    {
      id: 45,
      title: 'Navli Ramzat',
      location: 'Mangalya Vatika Party Plot',
      description: 'Navratri Celebration',
      price: '₹ 349 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403536-tedxrfuqzr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/navli-ramzat/ET00403536'
    },
    {
      id: 46,
      title: 'Amdavadi GARBA by CELEBRATIONS',
      location: 'Vivenza by Gopi: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 249 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00335345-ajfjxdlkju-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/celebrations-amdavadi-garba/ET00335345'
    },
    {
      id: 47,
      title: 'RANGAT GARBA & MANDAVDI GARBA 2024',
      location: 'Ruta Farm (Party Plot): Adalaj',
      description: 'Navratri Celebration',
      price: '₹ 350 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411178-kzyeshjrhm-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rangat-garba-mandavdi-garba-2024/ET00411178'
    },
    {
      id: 48,
      title: 'GSG - 10  Garba + Mandli  Pre-Navratri 2024',
      location: 'Aman Aakash Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411952-jmmurukrlc-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/gsg-10-garba-mandli-pre-navratri-2024/ET00411952'
    },
    {
      id: 49,
      title: 'Radhe Raas',
      location: 'Krishna Farms: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 249 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412249-xkpurcwrst-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/radhe-raas/ET00412249'
    },
    {
      id: 50,
      title: '"Chanchar Chowk"-Ramo Garba Bedhadak 2024',
      location: 'Visat farm MD, Karai: Gandhinagar',
      description: 'Navratri Celebration',
      price: '₹ 999 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411446-nfxywhmuuf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/chanchar-chowk-ramo-garba-bedhadak-2024/ET00411446'
    },
    {
      id: 51,
      title: 'Fadiyu - Gamthi Garba',
      location: 'Patel`s Cricket Ground: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 350 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00405911-djgbdfgqdk-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/fadiyu-gamthi-garba/ET00405911'
    },
    {
      id: 52,
      title: 'Rangeelo Raas Season 5',
      location: 'Shree Balaji Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412828-afvcpxcrru-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rangeelo-raas-season-5/ET00412828'
    },
    {
      id: 53,
      title: 'Shakti Sandhya Season 2',
      location: 'Pramukh Swami Mahotsav Ground: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 300 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409369-fmdlafauvs-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/shakti-sandhya-season-2/ET00409369'
    },
    {
      id: 54,
      title: 'Adhyashakti Garba',
      location: 'Arristo Resorts and Club: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 175 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411949-vafrnxkcfk-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/adhyashakti-garba/ET00411949'
    },
    {
      id: 55,
      title: 'Amdavad no garbo',
      location: 'Riverfront House: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 250',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409077-gnuafsyctb-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/amdavad-no-garbo/ET00409077'
    },
    {
      id: 56,
      title: 'Garbani Ramjhat',
      location: 'Madhav Party Lawns, Bhadaj: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409437-rkpbrkwzhr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/garbani-ramjhat/ET00409437'
    },
    {
      id: 57,
      title: 'ANOKHI RATRI',
      location: 'Seven Star Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411709-emrsxsqscr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/anokhi-ratri/ET00411709'
    },
    {
      id: 58,
      title: 'Vintage Ramzat',
      location: 'Vrundavan Premium Lawn: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407493-nhwmcbtsuv-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/amazing-khelaiya/ET00407493'
    },
    {
      id: 59,
      title: 'CHACHAR CHOTH',
      location: 'Shree Balaji Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 500',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410560-aspxvlvxwu-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/chachar-choth/ET00410560'
    },
    {
      id: 60,
      title: 'Malak Na Garba 2024',
      location: 'Malak Na Garba: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413401-ylvbvmrezn-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/malak-na-garba-2024/ET00413401'
    },
    {
      id: 61,
      title: 'Amdawadi Sanedo ',
      location: 'YMCA International Centre: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407606-gvlxknwyjw-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/amdawadi-sanedo/ET00407606'
    },
    {
      id: 62,
      title: 'Heritage Garba - The Garba Festival of 2024',
      location: 'Merriment Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 649 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412765-zmatnpsbqu-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/heritage-garba-the-garba-festival-of-2024/ET00412765'
    },
    {
      id: 63,
      title: 'UNIVERSAL AMDAVADI GARBA',
      location: 'Mamta Farm & Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413341-mbujkhychs-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/universal-amdavadi-garba/ET00413341'
    },
    {
      id: 64,
      title: 'Sharnai by Rangeelo Raas',
      location: 'Shree Balaji Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 249 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410359-xyxqefxwsw-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rangeelo-raas-season-5/ET00410359'
    },
    {
      id: 65,
      title: 'Meet Jain- Raas Ratri 2024',
      location: 'Club O7: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 449 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA0IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409197-bnsjuznjle-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/meet-jain-raas-ratri-2024/ET00409197'
    },
    {
      id: 66,
      title: 'Gokul Rass Garba 2024',
      location: 'Kankaria Football Ground: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 150',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411954-jbbyfrrvrv-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/gokul-rass-garba-2024/ET00411954'
    },
    {
      id: 67,
      title: 'Sanjay Oza- Raas Ratri 2024',
      location: 'Club O7: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409198-bbzleexcpd-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/sanjay-oza-raas-ratri-2024/ET00409198'
    },
    {
      id: 68,
      title: 'DAKLA LIVE EXPERIENCE - AHMEDABAD ( Live concert)',
      location: 'Shankus Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 699 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMiBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00408501-qnbeeuesnv-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dakla-live-experience-ahmedabad/ET00408501'
    },
    {
      id: 69,
      title: 'Dhruvish Shah- Raas Ratri 2024',
      location: 'Club O7: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 449 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409199-lvggtdndcf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dhruvish-shah-raas-ratri-2024/ET00409199'
    },
    {
      id: 70,
      title: 'Sanskrutik 3.0',
      location: 'Saket 4: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 2500',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410762-pwqsbrpebf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/sanskurtik-3-0/ET00410762'
    },
    {
      id: 71,
      title: 'Khelaiya 2024',
      location: 'Shriyam Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 1499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA3IE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413956-xmydvrprjs-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/khelaiya-2024/ET00413956'
    },
    {
      id: 72,
      title: 'Dandiya Utsav 2024',
      location: 'Basera Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412269-kjhvqhxtnb-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dandiya-utsav-2024/ET00412269'
    },
    {
      id: 73,
      title: 'Mastratri Garba',
      location: 'Mastratri Garba: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411782-mnydrhcyfr-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/mastratri-garba/ET00411782'
    },
    {
      id: 74,
      title: 'DANDIYA NIGHT X RANGEELO RAAS ',
      location: 'Shree Balaji Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413107-ksrgpkvpxy-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/blue-ocean-event-dandiya-night/ET00413107'
    },
    {
      id: 75,
      title: 'HBK School Satam Na Garba 2024- DAY 7 ',
      location: 'M K Farm House: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 399',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA5IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413518-uynzmjhmye-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/hbk-school-satam-na-garba-2024-day-7/ET00413518'
    },
    {
      id: 76,
      title: 'VRAJAVANI',
      location: 'Vasani farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 99 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAxIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412905-ymmwzbnczd-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/vrajavani/ET00412905'
    },
    {
      id: 77,
      title: 'RAO RAAS 2024- Day 9',
      location: 'M K Farm House: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 499',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMSBPY3Q%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412878-nwgkalwftf-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rao-raas-2024-day-9/ET00412878'
    },
    {
      id: 78,
      title: 'Dandiya Dhamaal 2024',
      location: 'The Dayavan Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411342-efqpajvnwn-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dandiya-dhamaal-2024/ET00411342'
    },
    {
      id: 79,
      title: 'Garba wale2024',
      location: 'Prasang Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411264-kycqsqvxqz-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/garba-wale2024/ET00411264'
    },
    {
      id: 80,
      title: 'Nache Gujarat Nav Rat 2024',
      location: 'Aagman Farm: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00405794-rjakrdfmmx-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/tatudo-season-4/ET00405794'
    },
    {
      id: 81,
      title: 'DAMMAR VAGE',
      location: 'Tero Restro and Cafe: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 249 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411084-xwcszmnccj-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dammar-vage/ET00411084'
    },
    {
      id: 82,
      title: 'Dandiya festival 2024',
      location: 'Shree Hari Party Plot: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 400',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413636-dmylhqfrhz-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/dandiya-festival-2024/ET00413636'
    },
    {
      id: 83,
      title: 'Vaagyo Re Dhol Garba Night',
      location: 'Nirvana Party Lawn: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 1000',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA4IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411606-rrtesupntu-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/vaagyo-re-dhol/ET00411606'
    },
    {
      id: 84,
      title: 'Rajwadi Ras Season 3',
      location: 'Palm Greens Clubs: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 299 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338262-sylxmrdukp-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rajwadi-ras/ET00338262'
    },
    {
      id: 85,
      title: 'Chunar - DJ to Dhol',
      location: 'Vintage Vibes: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 399 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00410153-lghwrhwmzp-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/chunar-dj-to-dhol/ET00410153'
    },
    {
      id: 86,
      title: 'Raas - A Flavour of Kathiyawad',
      location: 'Chulo A flavour of smoke: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 399 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAzIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412226-jnzmsnrtxa-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/raas-a-flavour-of-kathiyawad/ET00412226'
    },
    {
      id: 87,
      title: 'Rajnagar na Garba',
      location: 'Rajnagar Club & Resort: Ahmedabad',
      description: 'Navratri Celebration',
      price: '₹ 4000 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA1IE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413996-hbpxyklzvb-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/rajnagar-na-garba/ET00413996'
    },
    {
      id: 88,
      title: 'PASS NU SETTING 2.0 By Four Seasons Events',
      location: 'Multiple Venues',
      description: 'Navratri Celebration',
      price: '₹ 199 onwards',
      imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdCBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00409079-vmjsywcsce-portrait.jpg',
      link: 'https://in.bookmyshow.com/activities/pass-nu-setting-2-0-by-four-seasons-events/ET00409079'
    }
  ]

  return (
    <div>
      <div className="container">
        <header className="py-8">
          <h1 className="text-3xl font-bold text-center">Upcoming Events</h1>
          <h2 className="text-xl text-center mt-2">Join us for vibrant celebrations!</h2>
          <p className="text-center mt-4">
            Explore our exciting events, get involved, and make unforgettable memories.
          </p>
        </header>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center pb-8">
          {outfits.map((outfit) => (
            <div
              key={outfit.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary transition duration-200 shadow-md p-4"
            >
              {outfit.promoted && (
                <div className="bg-green-500 text-white text-xs rounded-full px-2 py-1 absolute top-2 left-2">
                  PROMOTED
                </div>
              )}
              <a href={outfit.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={outfit.imageUrl}
                  alt={outfit.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                <h3 className="text-lg font-semibold">{outfit.title}</h3>
                  <div className="text-sm text-gray-600">{outfit.location}</div>
                  <div className="text-sm text-gray-600">{outfit.description}</div>
                  <div className="text-md font-bold text-gray-800">{outfit.price}</div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GarbaOutfits;
