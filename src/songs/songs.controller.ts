/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('/songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      console.log("Error occured while fetching songs",error.message);
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, {cause: error.message});
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} song`;
  }
  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} song`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} song`;
  }
  @Post()
  create(@Body() CreateSongDTO : CreateSongDTO) {
    // return 'This action adds a new song';
    return this.songsService.create(CreateSongDTO);
  }
}
