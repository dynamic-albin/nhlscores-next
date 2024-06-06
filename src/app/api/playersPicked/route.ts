import { connectDB } from '@/app/lib/database'
import { NextResponse } from 'next/server'
import { Player } from '@/models/player'

export async function GET() {
	try {
		await connectDB()
		return NextResponse.json(
			await Player.find({ picker: { $ne: '' } }).sort('name')
		)
	} catch (err) {
		return NextResponse.json({
			error: 'Server error when fetching picked players',
		})
	}
}