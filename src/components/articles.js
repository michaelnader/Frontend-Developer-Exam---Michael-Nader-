const LatestArticles = () => {
    const articles = [
      {
        image: "/images/image-currency.jpg", // Replace with actual paths
        author: "By Claire Robinson",
        title: "Receive money in any currency with no fees",
        description:
          "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...",
      },
      {
        image: "/images/image-restaurant.jpg",
        author: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        description:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
      },
      {
        image: "/images/image-plane.jpg",
        author: "By Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        description:
          "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...",
      },
      {
        image: "/images/image-confetti.jpg",
        author: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        description:
          "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
      },
    ];
  
    return (
      <section className="py-20 md:px-38 bg-[hsl(0,0%,98%)] font-['Public_Sans'] ">
         <h2 className="text-3xl md:text-4xl font-light text-[hsl(233,26%,24%)] mb-10">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-4 gap-6 ">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <p className="text-sm text-[hsl(233,8%,62%)] mb-2">{article.author}</p>
                <h3 className="text-lg text-[hsl(233,26%,24%)] font-semibold">{article.title}</h3>
                <p className="text-sm text-[hsl(233,8%,62%)] mt-2">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default LatestArticles;
  