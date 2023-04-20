import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import {apiVersion, dataset, projectId} from './sanity.env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
})

export const urlFor = (source: string) => imageUrlBuilder(client).image(source)