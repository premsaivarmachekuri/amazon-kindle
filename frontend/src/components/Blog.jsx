const Blog = ({data}) => {
    // console.log(data)
    const {
        author,
        asin,
        category_id,
        category_name,
        imgUrl,
        isBestSeller,
        isEditorsPick,
        isGoodReadsChoice,
        isKindleUnlimited,
        price,
        productURL,
        publishedDate,
        reviews,
        soldBy,
        stars,
        title
      } = data

      return(
        <div className="md:container md:mx-auto border-4 border-rose-600 flex flex-col">
            <img src={imgUrl}  className="max-w-[100px]" />
            <h1>{author}</h1>
        </div>
      )

}

export default Blog