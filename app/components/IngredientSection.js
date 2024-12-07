import styles from '../styles/IngredientSection.module.scss';
import Image from 'next/image';
import ing from '../images/Blogs.png';
import ing1 from '../images/ing1.png';
export default function IngredientsAndNews() {
  const ingredients = [
    {
      title:'Better Ingredients',
      description:'Only the best when you choose products offered on our platform – high-quality ingredients for high-quality products!',
    },
    {
      title: 'Magnesium',
      description: 'Boost energy and support muscle function',
    },
    {
      title: 'Hyaluronic Acid',
      description: 'For smooth, supple, and soft skin!',
    },
    {
      title: 'Vitamin B3',
      description: 'Niacin for healthy gut and skin',
    },
    {
      title: 'Lactobacillus',
      description: 'Invigorate your gut microbiome',
    },
  ];



  return (
    <div className={styles.container}>
      {/* Better Ingredients Section */}
      <section className={styles.ingredientsSection}>
        <div className={styles.ingredientsGrid}>
          {ingredients.map((item, index) => (
            <div key={index} className={styles.ingredientCard}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>SEE MORE</button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className={styles.newsSection}>
        <h2>Latest News</h2>
        <div className={styles.newsGrid}>
          
        <Image src={ing}  />
        </div>
      </section>
    </div>
  );
}
