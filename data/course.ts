export type CourseItem = {
  name: string;
  img: string;
  href: string;
  description: string;
};

export type CourseGroup = {
  title: string;
  items: CourseItem[];
};

export const courses: CourseGroup[] = [
  {
    title: "Kursus web",
    items: [
      { name: "1. fundamentall", img: "/gambar gro ngkok nggolek.png", href: "https://weboctary.hashnode.space/default-guide/fundamental/introduction", description: "Belajar awal awal pembuatan web" },
      { name: "2. frontend basic", img: "/gambar gro ngkok nggolek2.png", href: "https://weboctary.hashnode.space/default-guide/frontend/react", description: "belajar frontend basic menggunakan react" }
    //teruskan
    ]
  },
  {
    title: "Flutter",
    items: [
      { name: "introduction", img: "/mboh.png", href: "https://flutteroctary.hashnode.space/default-guide/installation/flutter", description: "blabla" },
      { name: "gro", img: "/gmba3.png", href: "", description: "blabla" }
    //teruskan
    ]
  },
  {
    title: "AI",
    items: [
      { name: "cek dwe", img: "/gmba3.png", href: "", description: "blabla" },
      { name: "mls buka bukai wifiku ampas", img: "/gmba3.png", href: "", description: "blabla" }
    //teruskan
    ]
  }
];
