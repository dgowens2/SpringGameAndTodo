package com.tiy;

/**
 * Created by DTG2 on 09/22/16.
 */
public class ChocolateSolution {
    public int smalls;
    public int bigs;
    public boolean hasSolution = false;

    public void setNoSolution() {
        smalls = -1;
        bigs = -1;
        hasSolution = false;
    }

    public void setSolution(int smalls, int bigs) {
        hasSolution = true;
        this.smalls = smalls;
        this.bigs = bigs;
    }

    public int getSmalls() {
        return smalls;
    }

    public void setSmalls(int smalls) {
        this.smalls = smalls;
    }

    public int getBigs() {
        return bigs;
    }

    public void setBigs(int bigs) {
        this.bigs = bigs;
    }

    public boolean isHasSolution() {
        return hasSolution;
    }

    public void setHasSolution(boolean hasSolution) {
        this.hasSolution = hasSolution;
    }
}
