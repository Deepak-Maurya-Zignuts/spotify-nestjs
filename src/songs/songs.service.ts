/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // songs array
    private readonly songs = [];

    create(song) {
        this.songs.push(song);
        return this.songs;
    }
    findAll() {
        throw new Error('Error while fetching all songs');
        return this.songs;
    }
}
