export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-23'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skIrNS3Ro6iyoQMkeQCtiU5ILB34U6rdDpcVtcetoU9DGTInq3zMa5saSO2dH6f2vTSLwXk24IHGqGsFEK2X95xLYOzCjMaGR14OIB9ck4lnJkC7iVhFX1fyN7HFD217BQ8RvTjU58enAcPgxzRoz8qLMWKw9YjT3ZcXHb4mTxsGjlSRRgAZ",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
