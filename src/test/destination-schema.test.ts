import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { destinationPageSchemas } from '../../lib/destination-schema'
import { CONTENT_DATES } from '../../lib/content-dates'

const course = { name: 'Test Links', detail: 'A links course.', price: '$100/round', tier: 'Budget', link: 'https://example.com' }

describe('destinationPageSchemas', () => {
  it('dates the page from CONTENT_DATES and lists courses in order', () => {
    const [page, list] = destinationPageSchemas('/destinations/myrtle-beach', 'Myrtle Beach', [course, { ...course, name: 'Second' }])
    expect(page).toMatchObject({ '@type': 'WebPage', url: 'https://www.fairwaypal.com/destinations/myrtle-beach', dateModified: CONTENT_DATES['/destinations/myrtle-beach'] })
    expect(list).toMatchObject({ '@type': 'ItemList', numberOfItems: 2 })
    expect(list.itemListElement.map((e) => [e.position, e.item['@type'], e.item.name])).toEqual([[1, 'GolfCourse', 'Test Links'], [2, 'GolfCourse', 'Second']])
  })

  it('is used by every destination guide', () => {
    const dir = path.join(__dirname, '../../app/destinations')
    for (const slug of readdirSync(dir).filter((d) => !d.includes('.'))) {
      const src = readFileSync(path.join(dir, slug, 'page.tsx'), 'utf8')
      expect(src, slug).toContain(`destinationPageSchemas('/destinations/${slug}'`)
    }
  })
})
