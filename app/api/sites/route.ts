import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'sites.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    const sites = JSON.parse(data);
    return NextResponse.json(sites);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load sites' },
      { status: 500 }
    );
  }
}
