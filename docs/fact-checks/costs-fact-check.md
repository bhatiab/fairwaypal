# Cost Data Fact-Check — MotoGP 2026 Race Weekends

Compiled: April 2026
Researcher: Automated nightly build (sprint-2/cost-breakdown-pages)

---

## Summary

Cost data was researched for 15 circuits: jerez, le-mans, catalunya, mugello, hungary, brno, assen, sachsenring, silverstone, aragon, misano, austria, portimao, valencia, austin.

Data covers: ticket prices (GA, grandstand, VIP), accommodation tiers (budget/mid/premium per night), flight estimates by region, daily food estimates, and local transport.

---

## Data Quality by Circuit

### High confidence — 2026 official confirmed

| Circuit | Source | Notes |
|---------|--------|-------|
| Jerez | jerezmotogp.com | 3-day tickets confirmed. GA €69–99 early bird. Grandstand €149–259. VIP €1,450–1,590. |
| Le Mans | gpfrancemoto.com | GA €117–122. Covered grandstands €160–179 (most sold out). Under-16s free confirmed. |
| Catalunya | motogpbarcelona.com | Full price matrix confirmed. GA €89–119. Grandstands €109–259. 4-for-3 offer confirmed. |
| Mugello | motogpmugello.com / mugellocircuit.com | GA €135–239, grandstands €289–419 (from). Camper tickets from €90. |
| Brno | motogpczechia.com / motogpbrno.com | Wave-based pricing confirmed. GA Silver €108–133, Gold €141–183. Grandstands €208–354. Two sites show different prices — wave vs. final prices. |
| Assen | assenmotogp.com | Full grandstand price matrix confirmed. GA (Embankments) €189–219. Grandstands €209–329. |
| Sachsenring | motogpsachsenring.com | Natural grandstand €149–179. Seated grandstands €229–279. ADAC discount confirmed. |
| Silverstone | motogpsilverstone.com | Prices quoted in EUR on official site. GA ~£178. Grandstands ~£213–£298 equivalent. VIP from £495. |
| Aragon | aragonmotogp.com | GA €79–109. Grandstands €129–199. Budget-friendly calendar position confirmed. |
| Misano | motogpmisano.com | GA Prato 2 €159–189, Prato 1 €189–249. Grandstands €259–449. |
| Austria | motogpaustria.com / redbullring.com | GA €159–189. Covered Start-Ziel €299–379. Full matrix confirmed. |
| Valencia | motogpvalencia.com | Color-coded grandstands €149–309. Terraza VIP €1,450–1,590. |

### Medium confidence — mixed 2025/2026 data

| Circuit | Source | Notes |
|---------|--------|-------|
| Portimao | portugalmotogp.com / tickets.gp | Most 2026 tickets sold out. Prices derived from 2025 comparable + limited 2026 data. GA €130–160 estimate. Flag to user as approximate. |
| Austin (COTA) | circuitoftheamericas.com / motogpaustin.com | 2026 packages listed as sold out. GA ~$120–140 estimated from circuit data fragments and motorsporttickets.com comparison. Flag as approximate. |

### Low confidence — no official pricing found

| Circuit | Notes |
|---------|-------|
| Hungary (Balaton Park) | Brand new circuit for 2026. motogphungary.com shows tickets as "not available" with notify-me. One source (mygpticket.com) references Sunday-only from €135. All prices in raceCosts2026.ts are estimated — labeled with "Estimated" notes. |

---

## Accommodation Sources

Hotel price estimates are based on:
- Race-weekend premium rates (typically 50–100% above standard nightly rates)
- General regional knowledge (e.g., Eastern European cities cheaper than Western, Tuscany premium vs. Emilia-Romagna)
- Circuit-specific factors: Assen has no hotel supply near circuit so costs more; Jerez hotels walk to shuttle so command a premium

**All accommodation prices are approximate.** Users should check booking.com / hotels.com nearer the event for actual availability and pricing.

---

## Flight Estimates

Flight data sourced from:
- Kayak route averages (UK origin)
- easyJet / Ryanair typical route pricing
- Transatlantic average fares (AFAR 2026 analysis, Expedia market data)

**UK to European circuits:** Round-trip estimates from London/UK regional airports. Race-weekend fares can be 2–4x higher than off-peak — all estimates reflect normal (non-peak-race-weekend) fares.

**North America / Asia-Pacific:** These are transatlantic/transpacific estimates. Prices are highly variable and should be treated as directional only.

**Silverstone (UK):** UK fans have no flight cost. The estimate of £0–30 reflects regional train fares for UK-based attendees.

---

## Weekend Total Methodology

Weekend totals (budget / mid-range / premium) represent approximate all-in costs for a **3-day race weekend including**:
- 3 nights accommodation
- 3-day ticket
- Food (3 days)
- Local transport
- **Excluding flights** (too variable by origin)

Budget = cheapest ticket + camping/hostel + street food
Mid-range = grandstand ticket + 3-star hotel + mixed eating
Premium = top grandstand + 4-star hotel + meals out

---

## Circuits to Re-verify Before Site Launch

1. **Hungary** — check motogphungary.com for confirmed ticket pricing. All numbers are estimates.
2. **Portimao** — check for any 2026 ticket re-releases or confirmed price announcements.
3. **Austin (COTA)** — verify USD pricing once packages appear on circuitoftheamericas.com.
4. **Silverstone** — EUR-quoted prices on the official site may reflect temporary display. Verify GBP equivalents.

---

## Sources Consulted

- jerezmotogp.com — Jerez official tickets
- gpfrancemoto.com — Le Mans official tickets
- motogpbarcelona.com / circuitcat.com — Catalunya
- motogpmugello.com / mugellocircuit.com — Mugello
- motogphungary.com — Hungary (new circuit)
- motogpczechia.com / motogpbrno.com — Brno
- assenmotogp.com / ttcircuit-tickets.com — Assen
- motogpsachsenring.com / adac-motorsport.de — Sachsenring
- motogpsilverstone.com / silverstone.co.uk — Silverstone
- aragonmotogp.com — Aragon
- motogpmisano.com — Misano
- motogpaustria.com / redbullring.com — Austria
- portugalmotogp.com — Portimao
- motogpvalencia.com — Valencia
- circuitoftheamericas.com / motogpaustin.com — Austin
- tickets.gp — general reference for multiple races
- mygpticket.com — secondary market reference
- motorsporttickets.com — comparative pricing reference
- acampadamotogpjerez.com — Jerez official camping
- campingmugelloverde.com — Mugello camping
- afar.com — 2026 airfare trends
- kayak.com, skyscanner.com — flight route data
