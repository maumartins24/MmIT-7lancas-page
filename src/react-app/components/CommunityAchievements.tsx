import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import encruzilhadaSaberes from '@/images/saberes.jpg'

interface Achievement {
  id: number;
  title: string;
  purpose: string;
  description: string | React.ReactNode;
  image: string;
  icon?: React.ReactNode;
}

export default function CommunityAchievements() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      image: encruzilhadaSaberes,
      title: "Encruzilhada dos Saberes",
      purpose: "Conhecimento para a comunidade!",
      description: (
    <>
      <p>
        <em>Nea onnim no sua a, ohu</em> — “Aquele que não sabe, pode saber aprendendo!”
      </p>
      <p className="mt-3">
        Este é o lema que traduzirá nossos encontros. O Terreiro Ogum Sete Lanças traz para toda a comunidade um encontro de troca de saberes, conhecimentos e experiências que nos formam como seres e sociedade, potencializando nosso povo de forma política, social e espiritual.
      </p>
      <p className="mt-3">
        Caminhos que se cruzam e trocam — uma verdadeira <em>encruzilhada de conhecimento</em>.
      </p>
    </>
  )
},

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop&crop=center",
 
      title: "Youth Mentorship Program",
      purpose: "Education & Growth",
      description:
        "Our mentorship initiative pairs experienced community members with young people, providing guidance, skill development, and career opportunities.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop&crop=center",
      title: "Annual Festival",
      purpose: "Cultural Celebration",
      description:
        "A vibrant celebration of our diverse community featuring local artists, food vendors, and cultural performances that bring everyone together.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop&crop=center",
      title: "Tech Literacy Workshops",
      purpose: "Digital Inclusion",
      description:
        "Free workshops helping community members of all ages develop essential digital skills for the modern world.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center",
      title: "Community Kitchen",
      purpose: "Food Security",
      description:
        "A shared space where neighbors cook together, share recipes from different cultures, and ensure no one goes hungry.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      title: "Senior Support Network",
      purpose: "Elder Care",
      description:
        "Connecting seniors with volunteers for companionship, grocery shopping, and technology assistance to combat isolation.",
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-red-950 dark:to-black transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 dark:text-red-400 mb-6">
            Nossas Conquistas!
          </h2>
          <p className="text-xl text-gray-600 dark:text-red-100 max-w-3xl mx-auto">
            Descubra mais sobre nós e como trocamos com nossa comunidade!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-red-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 dark:text-red-300 mb-3">
                  {achievement.title}
                </h3>

                <button
                  onClick={() => toggleExpanded(achievement.id)}
                  className="w-full text-left"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-red-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-red-900/50 transition-colors duration-200">
                      <span className="font-medium text-blue-700 dark:text-red-300">
                        Oque é?
                      </span>
                      {expandedItem === achievement.id ? (
                        <ChevronUp className="w-5 h-5 text-blue-600 dark:text-red-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-600 dark:text-red-400" />
                      )}
                    </div>

                    {expandedItem === achievement.id && (
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-red-700 animate-in slide-in-from-top-2 duration-200">
                        <p className="text-gray-700 dark:text-red-100 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-red-900/30 rounded-lg">
                      <span className="font-medium text-blue-700 dark:text-red-300">
                        Propósito:
                      </span>
                      <span className="text-blue-600 dark:text-red-400 font-semibold">
                        {achievement.purpose}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
