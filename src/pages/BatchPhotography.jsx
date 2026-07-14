import PageHero from '../components/common/PageHero'
import LightboxGallery from '../components/common/LightboxGallery'
import { batchPhotos } from '../data/batchPhotography'

function BatchPhotography() {
  return (
    <>
      <PageHero
        eyebrow="Student's Corner"
        title="Batch Photography"
        description="A photographic journey through the batches that have passed through the department."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <LightboxGallery
            className="grid grid-cols-1 gap-6"
            thumbnailClassName="w-full object-contain max-h-[80vh]"
            filenames={batchPhotos}
            alt="Batch photograph"
          />

        </div>
      </section>
    </>
  )
}

export default BatchPhotography
