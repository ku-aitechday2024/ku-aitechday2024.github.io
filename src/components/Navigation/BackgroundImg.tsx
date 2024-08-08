const BackgroundImage = () => {
  return (
    <picture style={{ position: 'absolute', inset: 0, margin: 0 }}>
      <source
        type="/assets/background.webp"
        srcSet="/assets/background.webp?=100 100w
        /assets/background.webp?=200 200w
        /assets/background.webp?=400 400w
        /assets/background.webp?=800 800w
      "
      />
      <img
        src="/assets/background.jpg"
        srcSet="
        /assets/background.jpg?width=100 100w,
        /assets/background.jpg?width=200 200w,
        /assets/background.jpg?width=400 400w,
        /assets/background.jpg?width=800 800w"
        sizes="(max-width: 800px) 100vw, 50vw"
        style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        loading="lazy"
        decoding="async"
        alt="background image"
      />
    </picture>
  )
}

export default BackgroundImage
