import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import dotenv from 'dotenv';
import request from 'supertest';
import app from '../api/app.js';
import { connectDB, closeDB } from '../db/connect.js';
dotenv.config();

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await closeDB();
});

describe("Test bàsic de les rutes de l'API", () => {
  it('GET /api/v1/pizzes hauria de respondre', async () => {
    const res = await request(app).get('/api/v1/pizzes');
    console.log('Resposta GET /api/v1/pizzes:', res.statusCode, res.body);
    expect([200, 404]).toContain(res.statusCode);
  });

  it('GET /api/v1/ingredients hauria de respondre', async () => {
    const res = await request(app).get('/api/v1/ingredients');
    console.log('Resposta GET /api/v1/ingredients:', res.statusCode, res.body);
    expect([200, 404]).toContain(res.statusCode);
  });

  it('GET /api/v1/composicions/:IdPizza hauria de respondre', async () => {
    const testPizzaId = 1; // Id de Pizza existent
    const res = await request(app).get(`/api/v1/composicions/${testPizzaId}`);
    console.log(`Resposta GET /api/v1/composicions/${testPizzaId}:`, res.statusCode, res.body);
    expect([200, 404]).toContain(res.statusCode);
  });
});
