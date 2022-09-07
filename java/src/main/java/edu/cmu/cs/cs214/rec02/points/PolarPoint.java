package edu.cmu.cs.cs214.rec02.points;

public class PolarPoint implements Point {
    private double len;
    private double angle;

    public PolarPoint (double len, double angle) {
        this.len = len;
        this.angle = angle;
    }

    public int computeX() {
        return (int) (this.len * Math.cos(this.angle));
    }

    public int computeY() {
        return (int) (this.len * Math.sin(this.angle));
    }

    public int getX () {
        return computeX();
    }

    public int getY () {
        return computeY();
    }
}
