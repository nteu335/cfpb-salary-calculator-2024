import formatUSD from 'format-usd'
import type React from 'react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { BAND_MAXES, getSalary, LOCALITIES } from 'calculations'
import logo from '/img/nteu-335-skull-logo.jpg'

export default function CalculatorPage(): ReactElement {
  const [parameters, setParameters] = useSearchParams()
  const [salary, setSalary] = useState({})

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const p = {
      band: parameters.get('band') ?? '30',
      base: parameters.get('base') ?? '0',
      locality: parameters.get('locality') ?? 'ZX'
    }
    p.base = Number(p.base.replace(/[^\d.]/g, ''))

    if (p.base) {
      document.querySelector('#required-error')?.classList.add('hidden')
    } else {
      document.querySelector('#required-error')?.classList.remove('hidden')
      setSalary({})
      return
    }

    setSalary(getSalary(p))
  }
  const onChange = (event: React.ChangeEvent<HTMLElement>) => {
    const p = {}
    for (const entry of parameters.entries()) {
      if (['band', 'base', 'locality'].includes(entry[0])) {
        p[entry[0]] = entry[1]
      }
    }
    if (event.target.name === 'base') {
      p[event.target.name] = event.target.value.replace(/[^\d.]/g, '')
    } else {
      p[event.target.name] = event.target.value
    }
    setParameters(p)
  }
  return (
    <div className='mx-auto mt-4 w-full p-4 md:mt-12 md:grid md:w-[68rem] md:max-w-full md:grid-cols-5'>
      <div className='md:col-span-2 md:mr-8'>
        <h1 className='mb-6 text-3xl font-extrabold leading-none tracking-tight text-black'>
          CFPB Salary Estimator
        </h1>
        <p className='mb-6'>
          After several months of intense negotiation, including months of talks 
          before a federal mediator, on top of outstanding engagement from members 
          (thank you!), NTEU and CFPB’s bargaining teams reached a new 
          compensation agreement.
        </p>
        <h2 className='mb-6 text-2xl font-extrabold'>
          Dues-paying members: vote now!
        </h2>
        <p className='mb-6'>
          The ratification vote will be held online between May 1, 2024 2 pm ET and 
          May 7, 2024 11:59 pm PT. NTEU 335 dues-paying members can vote at 
          https://nteu335.org/2024/05/01/ratification-vote-on-2024-2026-compensation-agreement/. 
          If you're eligible and you haven't joined NTEU 335 yet, join now at https://nteu335.org/join/!
        </p>
      </div>
      <div className='md:col-span-3'>
        <div className='relative z-10 border border-gray-900 bg-white p-6 sm:rounded-md'>
          <form>
            <h2 className='mb-3 text-xl font-extrabold'>
              Estimate your compensation under the proposal
            </h2>
            <label className='mb-4 block'>
              <span className='text-gray-700'>
                Your current base salary<sup>1</sup>:
              </span>
              <input
                name='base'
                onChange={onChange}
                type='text'
                defaultValue={parameters.get('base')}
                className='mt-1 block w-full rounded-md border-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-3/5'
                placeholder='0'
                required
              />
              <span
                id='required-error'
                className='hidden font-bold text-rose-500'
              >
                Please provide a base salary.
              </span>
            </label>
            <label className='mb-4 block'>
              <span className='text-gray-700'>Your pay band:</span>
              <select
                name='band'
                id='band'
                onChange={onChange}
                defaultValue={parameters.get('band')}
                className=' mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-3/5'
              >
                {Object.keys(BAND_MAXES).map(band => (
                  <option key={band} value={band}>
                    CN-{band}
                  </option>
                ))}
              </select>
            </label>

            <label className='mb-6 block'>
              <span className='text-gray-700'>
                Your locality (2023 rate / 2024 rate):
              </span>
              <select
                name='locality'
                id='band'
                onChange={onChange}
                defaultValue={parameters.get('locality')}
                className=' mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:w-3/5'
              >
                {Object.keys(LOCALITIES).map(locality => (
                  <option key={locality} value={locality}>
                    {LOCALITIES[locality].name} ({LOCALITIES[locality]['2023']}%
                    / {LOCALITIES[locality]['2024']}%)
                  </option>
                ))}
              </select>
            </label>
            <div>
              <button
                type='submit'
                onClick={onSubmit}
                className='focus:shadow-outline h-10 rounded-lg bg-indigo-700 px-5 text-white transition-colors duration-150 hover:bg-indigo-800 active:bg-violet-700'
              >
                Estimate
              </button>
            </div>
            <p className='mt-3 text-sm'>
              *Your base salary can be found in{' '}
              <a
                href='https://hrconnect.treasury.gov'
                target='_blank'
                className='underline'
                rel='noreferrer'
              >
                HRConnect
              </a>
              .
            </p>
          </form>
        </div>
        <div
          className={
            salary.salary2024
              ? 'relative z-10 mt-6 border border-gray-900 bg-white p-6 sm:rounded-md'
              : 'hidden'
          }
        >
          <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-black'>
            Your estimated compensation:
          </h2>
          <div className='mb-4'>
            <strong>2024:</strong>{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2023base, decimalPlaces: 2 })}{' '}
                base salary in 2023
                <br />+ 5% merit increase<sup>1</sup>
                <br />={' '}
                {formatUSD({
                  amount: salary.salary2024base,
                  decimalPlaces: 2
                })}{' '}
                base salary<sup>2</sup> for 2024
                <br />+ {salary.locality2023}% locality rate for{' '}
                {salary.localityName} in 2023
                <br />={' '}
                <span className='bg-yellow-200'>{salary.salary2024}</span> total
                salary<sup>4</sup> for 2024
              </span>
              <span className='bg-yellow-200'>{salary.salary2024}</span>
            </span>{' '}
            salary +{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2023, decimalPlaces: 2 })}{' '}
                total salary in 2023
                <br />x 3%
                <br />+ $4,000 (fixed amount)
                <br />={' '}
                {formatUSD({
                  amount: salary.bonus2024,
                  decimalPlaces: 2
                })}{' '}
                one-time merit bonus
              </span>
              {formatUSD({
                amount: salary.bonus2024,
                decimalPlaces: 2
              })}
            </span>{' '}
            merit{' '}
            <span className='whitespace-nowrap'>
              bonus<sup>1</sup> +{' '}
              <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
                <span className='tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                  {formatUSD({
                    amount: salary.salary2024base,
                    decimalPlaces: 2
                  })}{' '}
                  base salary for 2024
                  <br />x {salary.localityDiff}% (diff between 2024 and 2023
                  rate)
                  <br />={' '}
                  {formatUSD({
                    amount: salary.localityLumpSum,
                    decimalPlaces: 2
                  })}{' '}
                  lump sum (paid in three parts)<sup>6</sup>
                </span>
                {formatUSD({
                  amount: salary.localityLumpSum,
                  decimalPlaces: 2
                })}
              </span>
            </span>{' '}
            locality increase lump sum paid in three parts<sup>6</sup>
          </div>
          <div className='mb-4'>
            <strong>2025:</strong>{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2024base, decimalPlaces: 2 })}{' '}
                base salary in 2024
                <br />+ 4.8% merit increase
                <br />={' '}
                {formatUSD({
                  amount: salary.salary2025base,
                  decimalPlaces: 2
                })}{' '}
                base salary<sup>2</sup> for 2025
                <br />+ {salary.locality2024}% estimated locality<sup>3</sup>{' '}
                for {salary.localityName} in 2025
                <br />={' '}
                <span className='bg-yellow-200'>{salary.salary2025}</span> total
                salary<sup>4</sup> for 2025
              </span>
              <span className='bg-yellow-200'>{salary.salary2025}</span>
            </span>{' '}
            salary +{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2024, decimalPlaces: 2 })}{' '}
                total salary in 2024
                <br />x 2%
                <br />+ $3,500 (fixed amount)
                <br />={' '}
                {formatUSD({
                  amount: salary.bonus2025,
                  decimalPlaces: 2
                })}{' '}
                one-time merit bonus
              </span>
              {formatUSD({
                amount: salary.bonus2025,
                decimalPlaces: 2
              })}
            </span>{' '}
            merit bonus
          </div>
          <div className='mb-4'>
            <strong>2026:</strong>{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-32 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2025base, decimalPlaces: 2 })}{' '}
                base salary in 2025
                <br />+ 3.6% estimated merit increase
                <sup>5</sup>
                <br />={' '}
                {formatUSD({
                  amount: salary.salary2026base,
                  decimalPlaces: 2
                })}{' '}
                base salary<sup>2</sup> for 2026
                <br />+ {salary.locality2025}% estimated locality<sup>3</sup>{' '}
                for {salary.localityName} in 2026
                <br />={' '}
                <span className='bg-yellow-200'>{salary.salary2026}</span> total
                salary<sup>4</sup> for 2026
              </span>
              <span className='bg-yellow-200'>{salary.salary2026}</span>
            </span>{' '}
            salary +{' '}
            <span className='has-tooltip underline decoration-dotted hover:decoration-solid'>
              <span className='tooltip -mt-28 -ml-20 w-max rounded border border-gray-900 bg-gray-100 p-2 text-sm shadow-lg'>
                {formatUSD({ amount: salary.salary2025, decimalPlaces: 2 })}{' '}
                total salary in 2025
                <br />x 2%
                <br />+ $3,000 (fixed amount)
                <br />={' '}
                {formatUSD({
                  amount: salary.bonus2026,
                  decimalPlaces: 2
                })}{' '}
                one-time merit bonus
              </span>
              {formatUSD({
                amount: salary.bonus2026,
                decimalPlaces: 2
              })}
            </span>{' '}
            merit bonus
          </div>
          <div className='mb-4'>
            All employees will receive a $75 health insurance subsidy in 2024
            ($85 in 2025 and 2026) per pay period. Employees with a total salary
            under $150,000 will receive a $1,000 annual health and wellness
            payment each year.
          </div>
          <h2 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-black'>
            Notes:
          </h2>
          <div className='mb-4'>
            <strong>
              <sup>1</sup>2024 merit lump sums:
            </strong>{' '}
            Both the 2024 merit increase and 2024 merit bonus will be paid as
            lump sums as soon as administratively feasible (within 4 months).
          </div>
          <div className='mb-4'>
            <strong>
              <sup>2</sup>Pay band maximums:
            </strong>{' '}
            Your pay band (CN-{salary.band}) has a maximum <em>base</em> salary
            of{' '}
            {formatUSD({
              amount: salary.bandCap2024,
              decimalPlaces: 2
            })}{' '}
            in 2024,{' '}
            {formatUSD({
              amount: salary.bandCap2025,
              decimalPlaces: 2
            })}{' '}
            in 2025 and{' '}
            {formatUSD({
              amount: salary.bandCap2026,
              decimalPlaces: 2
            })}{' '}
            in 2026. You will not receive merit increases once you reach this
            limit but you will still receive locality rate adjustments and merit
            bonuses. If you are at your pay band maximum, you will receive
            another lump sum in lieu of the merit increase that is on top of the
            merit increase lump sum.
          </div>
          <p className='mb-4'>
            <strong>
              <sup>3</sup>Locality rates:
            </strong>{' '}
            2025 and 2026 locality rates will be based on yet-to-be-released GS
            locality rates for those years. The 2024 rate is used in the above
            calculations.
          </p>
          <div className='mb-4'>
            <strong>
              <sup>4</sup>Salary cap:
            </strong>{' '}
            There is a <em>total</em> salary cap of $255,000 across all pay
            bands that cannot be exceeded. If you are at the salary cap, you
            will receive a lump sum in lieu of the merit increase.
          </div>
          <p className='mb-4'>
            <strong>
              <sup>5</sup>ECI:
            </strong>{' '}
            The 2026 merit increase will be equal to 2026's yet-to-be-released
            Employment Cost Index (ECI). The Bureau estimates ECI for 2026 will
            be 3.6%. For reference, 2024 ECI was 4.6% and 2025 ECI will be 4.8%.
          </p>
          <p className='mb-4'>
            <strong>
              <sup>6</sup>Locality increase lump sums:
            </strong>{' '}
            The 2024 locality rate will be paid in three lump sums over 2024.
            The first part will be paid as soon as administratively feasible,
            within 4 months of effective date. The second part will be paid in
            PP20 and the third in PP23.
          </p>
        </div>
      </div>
      <img
        src={logo}
        alt='NTEU 335'
        className='inset-x-1/4 z-0 mt-8 md:fixed md:bottom-6 md:right-6 md:left-[inherit] md:w-1/4'
      />
    </div>
  )
}
