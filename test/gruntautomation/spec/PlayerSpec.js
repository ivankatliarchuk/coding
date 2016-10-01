describe("Player", function () {
  var player;
  var song;

  beforeEach(function () {
    player = new Player();
    song = new Song();
  });

  it ("should be able to play a Song", function () {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    // custom made matcher.
    expect(player).toBePlaying(song);
  });

  describe ("when song has been paused", function () {
    beforeEach(function () {
      player.play(song);
      player.pause();
    });

    it ("should indicate that the song is currently paused", function () {
      expect(player.isPlaying).toBeFalsy();

      // use of not.
      expect(player).not.toBePlaying(song);
    });

    // use of spies to intercept and test method calls
    it("tells the current song if the use has made it a favorite", function () {
      spyOn(song, 'persistFavoriteStatus');

      player.play(song);
      player.makeFavorite();

      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    // demonstrate the use of exceptions.
    describe("#resume", function () {
      it ("should throw an exception if song is already playing", function () {
        player.play(song);

        expect(function () {
          player.resume();
        }).toThrowError("song is already playing");
      })
    });

  })
});
