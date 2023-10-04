import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { GymUseCase } from './create-gym'

let gymRepository: InMemoryGymsRepository
let sut: GymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymRepository = new InMemoryGymsRepository()
    sut = new GymUseCase(gymRepository)
  })

  it('Should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -31.7622969,
      longitude: -52.3294118,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
