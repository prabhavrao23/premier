package com.pl.prem_zone.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.Collectors;

import static java.util.Locale.filter;

@Component
public class PlayerService {
    private final PlayerRepo playerRepo;

    @Autowired
    public PlayerService(PlayerRepo playerRepo){
        this.playerRepo = playerRepo;
    }


    public List<Player> getPlayers(){
        return playerRepo.findAll();
    }

    // Returns players whose team name contains the search string (case-insensitive)
    public List<Player> getFromTeam(String teamName){
        return playerRepo.findAll().stream()
                .filter(player -> player.getTeam().toLowerCase().contains(teamName.toLowerCase()))
                .collect(Collectors.toList());

    }

    public List<Player> getPlayersByName(String searchText){
        return playerRepo.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByPos(String searchText){
        return playerRepo.findAll().stream()
                .filter(player ->
                        player.getPos().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByNation(String searchText){
        return playerRepo.findAll().stream()
                .filter(player->
                        player.getNation().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    // Returns players matching both team (partial, case-insensitive) and position (partial, case-insensitive)
    public List<Player> getPlayerByTeamAndPosition(String team, String position){
        return playerRepo.findAll().stream()
                .filter(player-> player.getTeam().toLowerCase().contains(team.toLowerCase()) && player.getPos().toLowerCase().contains(position.toLowerCase()))
                .collect(Collectors.toList());


    }

    public Player addPlayer(Player player){
        playerRepo.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedPlayer){
        Optional<Player> existingPlayer = playerRepo.findByName(updatedPlayer.getName());
        if(existingPlayer.isPresent()){
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setTeam(updatedPlayer.getTeam());
            playerToUpdate.setPos(updatedPlayer.getPos());
            playerToUpdate.setNation(updatedPlayer.getNation());


            playerRepo.save(playerToUpdate);
            return playerToUpdate;

        }
        return null;
    }

    @Transactional
    public void deletePlayer(String playerName){
        playerRepo.deleteByName(playerName);
    }

}

